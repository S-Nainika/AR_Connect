/* -------------------------------
   Load path from previous page
--------------------------------*/
const path = JSON.parse(localStorage.getItem("path"));

const navHint = document.getElementById("navHint");
const arrow = document.getElementById("arrow");

if (!path || path.length < 2) {
  navHint.innerText = "🎉 Destination reached";
  throw new Error("Destination reached");
}

const current = path[0];
const next = path[1];

/* -------------------------------
   Campus coordinates
--------------------------------*/
const campusMap = {
  ENTRY:{x:-4,y:2},

  B8:{x:0,y:0},
  B7:{x:2,y:0},
  B6:{x:4,y:0},
  B5:{x:6,y:0},
  B4:{x:8,y:0},
  B3:{x:10,y:0},

  B1:{x:0,y:4},
  B2:{x:2,y:4},
  B9:{x:4,y:4},
  B10:{x:6,y:4},
  B11:{x:8,y:4},
  B0:{x:10,y:4},

  ADMIN_BLOCK:{x:10,y:2},
  GIRLS_HOSTEL:{x:12,y:2},
  BOYS_HOSTEL:{x:4,y:6}
};

/* -------------------------------
   Direction logic
--------------------------------*/
function getDirection(from, to) {
  const dx = campusMap[to].x - campusMap[from].x;
  const dy = campusMap[to].y - campusMap[from].y;

  if (Math.abs(dx) > Math.abs(dy)) {
    return dx > 0 ? "RIGHT" : "LEFT";
  } else {
    return dy > 0 ? "STRAIGHT" : "BACK";
  }
}

const direction = getDirection(current, next);

/* -------------------------------
   Apply direction
--------------------------------*/
switch (direction) {
  case "RIGHT":
    arrow.setAttribute("rotation", "0 -90 0");
    navHint.innerText = "➡ TURN RIGHT\n📸 Close AR & scan next QR";
    break;

  case "LEFT":
    arrow.setAttribute("rotation", "0 90 0");
    navHint.innerText = "⬅ TURN LEFT\n📸 Close AR & scan next QR";
    break;

  case "BACK":
    arrow.setAttribute("rotation", "0 180 0");
    navHint.innerText = "↩ TURN BACK\n📸 Close AR & scan next QR";
    break;

  default:
    arrow.setAttribute("rotation", "0 0 0");
    navHint.innerText = "⬆ GO STRAIGHT\n📸 Close AR & scan next QR";
}
