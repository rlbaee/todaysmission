const mission = document.getElementById("mission");
const button = document.getElementById("generate-mission");

button.onclick = function () {
  fetch("/api/mission")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Unable to load a mission");
      }

      return response.json();
    })
    .then((selectedMission) => {
      mission.textContent = selectedMission.mission;
    })
    .catch((error) => {
      console.error(error);
      mission.textContent = "Unable to load a mission. Please try again.";
    });
};
