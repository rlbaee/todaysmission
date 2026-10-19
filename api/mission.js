const missions = require("../assets/json/missions.json");

function sendJson(response, statusCode, body) {
  response.status(statusCode).setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
}

module.exports = function handler(request, response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (request.method === "OPTIONS") {
    response.status(204).end();
    return;
  }

  if (request.method !== "GET") {
    response.setHeader("Allow", "GET, OPTIONS");
    sendJson(response, 405, { error: "Method not allowed" });
    return;
  }

  const requestedId = request.query && request.query.id;
  const mission = requestedId
    ? missions.find((item) => item.id === String(requestedId))
    : missions[Math.floor(Math.random() * missions.length)];

  if (!mission) {
    sendJson(response, 404, { error: "Mission not found" });
    return;
  }

  sendJson(response, 200, mission);
};
