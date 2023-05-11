const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController.js");

// sign in
router.get(
    "/google",
    AuthController.googleLogin
);

// sign in callback
router.get(
    "/google/callback",
    AuthController.googleCallback,
);

module.exports = router;