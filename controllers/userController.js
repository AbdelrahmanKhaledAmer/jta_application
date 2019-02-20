// Requiring JWT
const jwt = require("jsonwebtoken");

// Requiring the user model
const User = require("../models/user.js")

const userController = {
    signUp: (req, res) => {
        // User did not provide relevant information
        if (!req.body.email || !req.body.name || !req.body.password) {
            // Bad request
            res.status(400);
            res.json({
                "message": "Not enough information has been provided. Pleas make sure you entered all the correct info."
            });
            return;
        }
        // Try to find a user in the database with the same email
        User.findOne({ email: req.body.email }, (err, userData) => {
            // Database error occured. Return error status code and message.
            if (err) {
                // Internal server error
                res.status(500);
                res.json({
                    "message": "There has been an error while connecting with our database. Please try again later."
                });
                return;
            }
            // A user with the same email exists
            if (userData) {
                // Forbidden
                res.status(403);
                res.json({
                    "message": "This email has already been used to make an account."
                });
                return;
            }
            // Create a new user and save them in the database
            newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
            newUser.save();
            res.status(200);
            res.json({
                "message": "Your account has been created successfully, try logging in."
            });
        })
    },
    login: (req, res) => {
        if (!req.body.email || !req.body.password) {
            // Bad request
            res.status(400);
            res.json({
                "message": "Not enough information has been provided. Pleas make sure you entered all the correct info."
            });
            return;
        }
        User.findOne({ email: req.body.email }, (err, userData) => {
            // Database error occured. Return error status code and message.
            if (err) {
                // Internal server error
                res.status(500);
                res.json({
                    "message": "There has been an error while connecting with our database. Please try again later."
                });
                return;
            }
            // No user with this email exists.
            if (!userData) {
                // Forbidden
                res.status(403);
                res.json({
                    "message": "No user with this email exists. Try signing up."
                });
                return;
            }
            // Wrong password enetered.
            if (userData.password != req.body.password) {
                res.json(403);
                res.json({
                    "message": "There was an error in your information. Please try again."
                });
                return;
            }
            // Create a token containing the user's data
            let token = jwt.sign({ "email": userData.email }, "secretKey", {
                expiresIn: "30d" // Expires after a month
            });
            res.status(200);
            res.json({
                "message": "Logged in successfully.",
                "token": token
            });
        });
    }
}

module.exports = userController;