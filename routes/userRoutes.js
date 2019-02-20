// Requiring dependencies
const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController.js");

router.post('/api/signup', controller.signUp);
router.post('/api/login', controller.login);

module.exports = router;