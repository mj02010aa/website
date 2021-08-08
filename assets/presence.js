var statusIcon = document.getElementById("statusIcon");
var statusContent = document.getElementById("statusContent");

const lanyard = new WebSocket("wss://api.lanyard.rest/socket");

var dscdata = {};
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
  dscdata = JSON.parse(event.data);

  if (dscdata.t === "INIT_STATE" || dscdata.t === "PRESENCE_UPDATE") {
    update_presence();
  }
};

function update_presence() {
  if (statusIcon != null) {
    update_status(dscdata.d.discord_status);
  }

  if (dscdata.d.discord_status === "dnd") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-red-500 rounded-full inline-flex ml-1 mr-1"></span> Online in <b>Discord</b>`;

  } else if (dscdata.d.discord_status === "idle") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-yellow-500 rounded-full inline-flex ml-1 mr-1"></span> Online in <b>Discord</b>`;

  } else if (dscdata.d.discord_status === "online") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-green-500 rounded-full inline-flex ml-1 mr-1"></span> Online in <b>Discord</b>`;

  } else if (dscdata.d.discord_status === "offline") {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1 mr-1"></span> Offline in <b>Discord</b>`;

  } else {
    statusContent.innerHTML = `<span class="w-3 h-3 bg-gray-500 rounded-full inline-flex ml-1 mr-1"></span> Loading <b>Lanyard</b>`;

  }
}
