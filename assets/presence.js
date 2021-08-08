var statusIcon = document.getElementById("statusIcon");
var listeningStatus = document.getElementById("listeningStatus");
var listeningContent = document.getElementById("listeningContent");

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
    listeningContent.innerHTML = `<span class="w-2 h-2 bg-red-500 rounded-full inline-flex animate-pulse mr-2"></span> Online in <b>Discord</b>`;

  } else if (dscdata.d.discord_status === "idle") {
    listeningContent.innerHTML = `<span class="w-2 h-2 bg-yellow-500 rounded-full inline-flex animate-pulse mr-2"></span> Online in <b>Discord</b>`;

  } else if (dscdata.d.discord_status === "online") {
    listeningContent.innerHTML = `<span class="w-2 h-2 bg-green-500 rounded-full inline-flex animate-pulse mr-2"></span> Online in <b>Discord</b>`;

  } else if (dscdata.d.discord_status === "offline") {
    listeningContent.innerHTML = `<span class="w-2 h-2 bg-gray-500 rounded-full inline-flex animate-pulse mr-2"></span> Offline in <b>Discord</b>`;

  } else {
    listeningContent.innerHTML = `<span class="w-2 h-2 bg-gray-500 rounded-full inline-flex animate-pulse mr-2"></span> Loading <b>Lanyard</b>`;

  }
}

function update_status(status) {
  var check_animation = statusIcon.classList[statusIcon.classList.length - 2];
  if (check_animation.includes("animate")) {
    statusIcon.classList.remove(
      statusIcon.classList[statusIcon.classList.length - 2]
    );
  }
  statusIcon.classList.replace(
    statusIcon.classList[statusIcon.classList.length - 1],
    `bg-${color}`
  );
  statusIcon._tippy.setContent(text);
}
