// server.js
// Requiring Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Give your server a port to listen to
const port = 8080;

// Use BodyParser as Middleware
// Middleware is a piece of code that your program runs in the middle of running other code.
app.use(bodyParser.json());

// A basic get request that just sends a hello world message to the user
app.get('/', (req, res) => {
    res.json("Hello, World!");
});

// App starts listening on given port   
app.listen(port, () => {
    console.log("Server started listening to port " + port)
});