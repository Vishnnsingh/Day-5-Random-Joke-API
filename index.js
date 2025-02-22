const express = require("express");
const app = express();
const jokes = require("./joke.json");

app.get("/", (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    // console.log("Random Joke:", randomJoke.joke); // Print joke in console
    res.json(randomJoke);
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
