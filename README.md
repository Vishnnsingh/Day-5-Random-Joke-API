# Random Joke API

## Overview
This is a simple Node.js Express API that serves random jokes. The jokes are stored in a JSON file, and a random joke is returned whenever the `/joke` endpoint is accessed.

## Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/Vishnnsingh/Day-5-Random-Joke-API.git
   cd Day-5-Random-Joke-API
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

### Start the server
- Run in normal mode:
  ```sh
  npm start
  ```
- Run in development mode (with automatic restart using nodemon):
  ```sh
  npm run dev
  ```

### API Endpoint
- **GET /joke**
  - Returns a random joke from `joke.json`
  - Example Response:
    ```json
    {
      "id": 3,
      "joke": "Why don’t mountains ever get tired? They peak all the time."
    }
    ```

## Testing the API
You can test the API using:

### Postman
1. Open Postman.
2. Make a `GET` request to:
   ```sh
   http://localhost:5000/joke
   ```
3. Observe the JSON response with a random joke.

### cURL (Command Line)
Run the following command:
```sh
curl http://localhost:5000/joke
```

### Browser
Simply navigate to:
```sh
http://localhost:5000/joke
```

## Dependencies
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Nodemon](https://www.npmjs.com/package/nodemon) (for development)

## GitHub Repository
The source code is available at:
[Day-5-Random-Joke-API](https://github.com/Vishnnsingh/Day-5-Random-Joke-API)

## License
This project is licensed under the ISC License.

