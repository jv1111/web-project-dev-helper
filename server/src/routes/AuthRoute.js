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

//check if user is logged in
router.get(
    "/login",
    AuthController.getSession
);

router.get(
    "/logout",
    AuthController.logout
)

module.exports = router;