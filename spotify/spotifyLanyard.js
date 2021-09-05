var statusIcon = document.getElementById("statusIcon");
var statusContent = document.getElementById("statusContent");

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
    spotifyDetails.innerHTML = `<div class="head-img-section"><a class="songRedi" href="https://open.spotify.com/track/${api.d.spotify.track_id}" target="_blank"><img draggable="false" class="spotify-song-img" src="${api.d.spotify.album_art_url}?size=2048"></a></div><div class="head-text-section"><div class="spotify-text-exp text-gray-100"><b><a class="songRedi" href="https://open.spotify.com/track/${api.d.spotify.track_id}" target="_blank">${song}</a></b><br>by ${artist}<br>on ${album}<br><a class="rh" href="/"><span class="text-gray-400">Return Home</span></a></div></div>`;

  } else {
    spotifyDetails.innerHTML = `Not Listening<br><a class="rh" href="/"><span class="text-gray-400">Return Home</span></a>`;
  }

}
