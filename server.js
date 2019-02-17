// server.js
// Requiring Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize express app
const app = express();


// Use BodyParser as Middleware
// Middleware is a piece of code that your program runs in the middle of running other code.
app.use(bodyParser.json());

// A basic get request that just sends a hello world message to the user
app.get('/', (req, res) => {
    res.json("Hello, World!");
});

// Connect to mongodb
const DBName = "jta_app"
mongoose.connect("mongodb://127.0.0.1/" + DBName)
    // .then happens when successfully connected
    .then(() => {
        console.log("Successfully connectd to database " + DBName);
    })
    // .catch happens when connection fails
    .catch((err) => {
        console.log(err);
    });

// Give your server a port to listen to
const port = 8080;

// App starts listening on given port   
app.listen(port, () => {
    console.log("Server started listening to port " + port)
});