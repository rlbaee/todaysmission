fetch("/assets/json/missions.json")
  .then((response) => response.json())
  .then((missions) => {
    const randomMission = missions[Math.floor(Math.random() * missions.length)];

    document.getElementById("mission").textContent = randomMission.mission;
  });
