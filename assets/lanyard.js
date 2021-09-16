var statusIcon = document.getElementById("statusIcon");
var statusContent = document.getElementById("statusContent");
var spotifyListening = document.getElementById("spotifyListening");

const lanyard = new WebSocket("wss://api.lanyard.rest/socket");

var api = {};
var received = false;

lanyard.onopen = function () {
  lanyard.send(
    JSON.stringify({
      op: 2,
      d: {
        subscribe_to_id: "354343248698802187",
      },
    })
  );
};

setInterval(() => {
  if (received) {
    lanyard.send(
      JSON.stringify({
        op: 3,
      })
    );
  }
}, 30000);

lanyard.onmessage = function (event) {
  received = true;
  api = JSON.parse(event.data);

  if (api.t === "INIT_STATE" || api.t === "PRESENCE_UPDATE") {
    update_presence();
  }
};

function update_presence() {
  if (statusIcon != null) {
    update_status(api.d.discord_status);
  }

  if (api.d.listening_to_spotify == true) {
    var artist = `${
      api.d.spotify.artist.split(";")[0].split(",")[0]
    }`;
    var song = `${
      api.d.spotify.song.split("(")[0]
    }`;
    var album = `${
      api.d.spotify.album.split("(")[0]
    }`;
    spotifyListening.innerHTML = `<i class="fab fa-spotify text-green-500 animate-spin ml-1"></i> Listening <a href="https://open.spotify.com/track/${api.d.spotify.track_id}" target="_blank" class="florence-text-btn">${song}</a> by ${artist} on ${album}`;
  } else {
    spotifyListening.innerHTML = ``;
  }

  if (api.d.discord_status === "dnd") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-red-500 rounded-full inline-flex ml-1"></span> Online`;

  } else if (api.d.discord_status === "idle") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-yellow-500 rounded-full inline-flex ml-1"></span> Online`;

  } else if (api.d.discord_status === "online") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-green-500 rounded-full inline-flex ml-1"></span> Online`;

  } else if (api.d.discord_status === "offline") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1"></span> Offline`;

  } else {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1"></span> Loading`;

  }
}
