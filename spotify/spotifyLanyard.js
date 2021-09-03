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
    spotifyDetails.innerHTML = `<div class="head-img-section"><img draggable="false" class="spotify-song-img-nob" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png?size=2048"></div><div class="head-text-section"><div class="spotify-text-exp text-gray-100"><br id="head-br"><b> </b><br>Not Listening<br> </div></div>`;
  }

}