// Requiring dependencies
const jwt = require("jsonwebtoken");

const middleware = {
    authenticate: (req, res, next) => {
        // Get the token from the request header
        let token = req.headers["access-token"];
        if (!token) {
            res.status(403);
            res.json({
                "message": "You don't seem to be logged in."
            });
            return;
        }
        jwt.verify(token, "secretKey", (err, decoded) => {
            if (err) {
                res.status(403);
                res.json({
                    "message": "This token is invalid"
                });
                return;
            }
            // Add the decoded token to the request
            req.decoded = decoded;
            next();
            return;
        });
    }
};

module.exports = middleware;