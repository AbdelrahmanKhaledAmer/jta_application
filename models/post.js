// Requiring the mongoose module
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Post Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now // This will always insert the current date
    }
});

// Export the post schema to the rest of the project
const Post = mongoose.model('post', PostSchema);
module.exports = Post