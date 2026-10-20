const mission = document.getElementById("mission");
const missionCard = document.getElementById("mission-card");
const changelog = document.getElementById("changelog");
const changelogClose = document.getElementById("changelog-close");
const appVersion = "1.2.0";
const seenVersionKey = "todays-mission-seen-version";

if (localStorage.getItem(seenVersionKey) !== appVersion) {
  changelog.hidden = false;
  localStorage.setItem(seenVersionKey, appVersion);
}

changelogClose.onclick = function () {
  changelog.hidden = true;
};

async function loadMission() {
  missionCard.classList.add("is-loading");
  try {
    const response = await fetch("/api/mission");

    if (!response.ok) {
      throw new Error("Unable to load a mission");
    }

    const selectedMission = await response.json();
    mission.textContent = selectedMission.mission;
  } catch (error) {
    console.error(error);
    mission.textContent = "Unable to load a mission. Please try again.";
  }
  missionCard.classList.remove("is-loading");
}

missionCard.addEventListener("click", loadMission);
missionCard.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    loadMission();
  }
});

loadMission();
