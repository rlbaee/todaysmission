# Today's Mission

## Features
- [x] Gives you a random mission to do
- [ ] Gives you a random mission for today only and restarts at midnight
- [ ] Saves progress in a database
- [ ] Auth

## Tech stack
The site is a static frontend with a Vercel serverless API.

## API

### Get a random mission

```http
GET https://your-project.vercel.app/api/mission
```

Example response:

```json
{
  "id": "1",
  "mission": "See how many times you can slip the phrase legend has it into conversation"
}
```

### Get a specific mission

Pass a mission ID with the `id` query parameter:

```http
GET https://your-project.vercel.app/api/mission?id=1
```

The endpoint supports `GET` requests and allows cross-origin requests, so it can
be called from another website or application:

```js
const response = await fetch(
  "https://your-project.vercel.app/api/mission"
);
const mission = await response.json();
```

Deploy the repository to Vercel with no additional configuration. Vercel
automatically detects [`api/mission.js`](./api/mission.js) as a serverless
function.

## Contributing
Comment, suggest, do anything you want ;) via GitHub issues.
