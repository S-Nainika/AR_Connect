console.log("✅ script.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM fully loaded");

  const params = new URLSearchParams(window.location.search);
  console.log("🔍 URL params:", window.location.search);

  const rawLocation = params.get("loc");
  console.log("📦 rawLocation =", rawLocation);

  const locTextEl = document.getElementById("locText");
  console.log("🎯 locText element =", locTextEl);

  if (!rawLocation) {
    locTextEl.innerText = "Not detected";
    console.warn("❌ No loc parameter");
    return;
  }

  const currentLocation = rawLocation.trim().toUpperCase();
  locTextEl.innerText = currentLocation;

  console.log("🎉 SUCCESS: Location set to", currentLocation);
});
