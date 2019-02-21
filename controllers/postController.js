// Requiring the post model
const Post = require("../models/post.js");

const postController = {
    viewAll: (req, res) => {
        Post.find({}, (err, posts) => {
            if (err) {
                res.status(500);
                res.json({
                    "message": "There has been an error while connecting with our database. Please try again later."
                });
                return;
            }
            res.status(200);
            res.json({
                "message": "Here are all the posts.",
                "data": posts
            });
            return;
        });
    },
    makePost: (req, res) => {
        let post = new Post({
            title: req.body.title,
            description: req.body.description
        });
        post.save();
        res.status(200);
        res.json({
            "message": "Your post has been made successfully!"
        });
        return;
    }
};

module.exports = postController;