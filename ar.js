/* -------------------------------
   Load path from previous page
--------------------------------*/
const rawPath = JSON.parse(localStorage.getItem("path"));

// keep only campus locations (not roads)
const path = rawPath.filter(p => campusMap[p]);

if (path.length < 2) {
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
   Show text instruction
--------------------------------*/
switch (direction) {
  case "RIGHT":
    navHint.innerText = "➡ TURN RIGHT\n📸 Scan next QR";
    break;

  case "LEFT":
    navHint.innerText = "⬅ TURN LEFT\n📸 Scan next QR";
    break;

  case "BACK":
    navHint.innerText = "↩ TURN BACK\n📸 Scan next QR";
    break;

  default:
    navHint.innerText = "⬆ GO STRAIGHT\n📸 Scan next QR";
}
