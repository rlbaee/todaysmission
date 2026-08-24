const mission = document.getElementById("mission");
const button = document.getElementById("generate-mission");

button.onclick = function () {
  console.log("clicked");
  fetch("../json/missions.json")
    .then((response) => response.json())
    .then((missions) => {
      const randomMission =
        missions[Math.floor(Math.random() * missions.length)];
      return randomMission;
    })
    .then((randomMission) => {
      mission.textContent = randomMission.mission;
    });
};
