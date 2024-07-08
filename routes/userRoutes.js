const express = require('express');

const UserController = require("../controllers/userController");

const router = express.Router();
router.post("/adduser", UserController.addUser);
router.post("/verify", UserController.verifyUser);

module.exports = router;