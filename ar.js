const path = JSON.parse(localStorage.getItem("path"));

if (!path || path.length < 2) {
  alert("Destination reached 🎉");
}

const current = path[0];
const next = path[1];

const campusMap = {
  // SAME coordinates you already used
};

function getDirection(from, to) {
  const dx = campusMap[to].x - campusMap[from].x;
  const dy = campusMap[to].y - campusMap[from].y;

  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0 ? "RIGHT" : "LEFT";
  } else {
    return dy > 0 ? "FORWARD" : "BACK";
  }
}

const direction = getDirection(current, next);
const arrow = document.getElementById("arrow");

switch (direction) {
  case "RIGHT":
    arrow.setAttribute("rotation", "0 -90 0");
    break;
  case "LEFT":
    arrow.setAttribute("rotation", "0 90 0");
    break;
  case "BACK":
    arrow.setAttribute("rotation", "0 180 0");
    break;
  default:
    arrow.setAttribute("rotation", "0 0 0");
}
