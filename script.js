document.addEventListener("DOMContentLoaded", () => {

  const campusMap = {
    "B8":  { x: 0, y: 0 },
    "B7":  { x: 2, y: 0 },
    "B6":  { x: 4, y: 0 },
    "B5":  { x: 6, y: 0 },
    "B4":  { x: 8, y: 0 },
    "B3 CSE": { x: 10, y: 0 },

    "ADMIN BLOCK": { x: 10, y: 2 },

    "B0":  { x: 0, y: 4 },
    "B11": { x: 2, y: 4 },
    "B1":  { x: 4, y: 4 },
    "B2":  { x: 6, y: 4 },
    "B9":  { x: 8, y: 4 },
    "B10": { x: 10, y: 4 },
    "GIRLS HOSTEL":{ x: 12, y: 2 },
    "BOYS HOSTEL":{ x: 4, y: 6 }
  };
  const graph = {
  ENTRY: ["R0"],
  R0: ["ENTRY", "R1", "R2"],
  R1: ["R0", "R15","R2","R3"],
  R3: ["B8","R1","R15","R16" ,"R4"],
  R4: ["B7","R3","R16","R17", "R5"],
  R5: ["B6","R4","R17", "R6"],
  R6: ["B5","R5","R18", "R7"],
  R7: ["B4","R6","R18", "R8"],
  R8: ["B3","R7","R19"],
  R19: ["ADMIN BLOCK","R8","R9"],
  R9: ["B0","R21","R19", "R10"],
  R21: ["GIRLS HOSTEL","R9"],
  R10: ["B11","R9","R18", "R11"],
  R11: ["B10","R10","R18", "R12"],
  R12: ["B9","R11","R17", "R13","R20"],
  R20: ["BOYS HOSTEL","R17","R12", "R13"],
  R13: ["B2","R17","R12", "R16","R14"],
  R14: ["B1","R13","R16", "R15","R2"],
  R2: ["R0","R1","R15", "R14"],
  R15: ["R1","R3","R2", "R14"],
  R16: ["R3","R4","R14", "R13"],
  R17: ["R4","R5","R13", "R12","R20"],
  R18: ["R6","R7","R11", "R10"],

  B8:["R3"],
  B7:["R4"],
  B6:["R5"],
  B5:["R6"],
  B4:["R7"],
  B3:["R8"],
  ADMIN_BLOCK:["R19"],
  GIRLS_HOSTEL:["R21"],
  B0:["R9"],
  B11:["R10"],
  B10:["R11"],
  B9:["R12"],
  B2:["R13"],
  B1:["R14"],
  BOYS_HOSTEL:["R20"],
  
};


  /* -------------------------------
     STEP 1: Detect current location
  --------------------------------*/
  const params = new URLSearchParams(window.location.search);
  const rawLocation = params.get("loc");

  if (!rawLocation) {
    alert("❌ Location not detected. Please scan a campus QR.");
    return;
  }

  const currentLocation = rawLocation.trim().toUpperCase();

  if (!campusMap[currentLocation]) {
    alert("❌ Invalid QR location: " + currentLocation);
    return;
  }

  console.log("📍 Current Location:", currentLocation);
  document.getElementById("locText").innerText = currentLocation;

  /* -------------------------------
     STEP 2: Destination selection
  --------------------------------*/
  const input = document.getElementById("destinationInput");
  const button = document.getElementById("startBtn");

  button.addEventListener("click", () => {
    const userInput = input.value.trim().toUpperCase();

    if (!campusMap[userInput]) {
      alert("Block not found. Try B3, B10, or Admin.");
      return;
    }

    const destination = campusMap[userInput];
    console.log("🎯 Destination selected:", userInput, destination);

    // NEXT STEP: path finding 
    
  });
  function shortestPath(graph, start, end) {
  const queue = [start];
  const visited = new Set([start]);
  const parent = {};

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === end) break;

    for (let neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        parent[neighbor] = current;
        queue.push(neighbor);
      }
    }
  }

  // Rebuild path
  const path = [];
  let node = end;

  while (node) {
    path.push(node);
    node = parent[node];
  }

  return path.reverse();
}
const path = shortestPath(graph, currentLocation, destination);
console.log(path);


});
