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
    spotifyDetails.innerHTML = `<div class="head-img-section"><img draggable="false" class="spotify-song-img" src="${api.d.spotify.album_art_url}?size=2048"></div><div class="head-text-section"><div class="spotify-text-exp text-gray-100"><br id="head-br"><b>${api.d.spotify.song}</b><br>by ${api.d.spotify.artist}<br>on ${api.d.spotify.album}</div></div>`;

  } else {
    spotifyDetails.innerHTML = `<div class="head-img-section"><img draggable="false" class="spotify-song-img-gb" src="https://i.scdn.co/image/ab67616d0000b273237665d08de01907e82a7d8a?size=2048?size=2048"></div><div class="head-text-section"><div class="spotify-text-exp text-gray-100"><br id="head-br"><b>Never Gonna Give You Up</b><br>by Rick Astley<br>on Whenever You Need Somebody</div></div>`;
  }

}
