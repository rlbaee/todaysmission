const mission = document.getElementById("mission");
const button = document.getElementById("generate-mission");
const changelog = document.getElementById("changelog");
const changelogClose = document.getElementById("changelog-close");
const appVersion = "1.1.0";
const seenVersionKey = "todays-mission-seen-version";

if (localStorage.getItem(seenVersionKey) !== appVersion) {
  changelog.hidden = false;
  localStorage.setItem(seenVersionKey, appVersion);
}

changelogClose.onclick = function () {
  changelog.hidden = true;
};

button.onclick = async function () {
  button.disabled = true;
  button.querySelector("span").textContent = "Finding a mission...";

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
  } finally {
    button.disabled = false;
    button.querySelector("span").textContent = "New mission";
  }
};
