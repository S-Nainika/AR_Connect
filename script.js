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

    // NEXT STEP: path finding + AR navigation
  });

});
