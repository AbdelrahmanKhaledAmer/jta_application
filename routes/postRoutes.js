// Requiring dependencies
const express = require("express");
const router = express.Router();

const controller = require("../controllers/postController.js");
const auth = require("../middleware/auth.js");

router.get("/api/posts", auth.authenticate, controller.viewAll);
router.post("/api/posts", auth.authenticate, controller.makePost);

module.exports = router;