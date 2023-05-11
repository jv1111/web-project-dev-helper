const passport = require("passport");

const googleLogin = passport.authenticate(
    "google",
    {
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'// to be able to get the email
        ]
    }
);

const googleCallback = passport.authenticate(
    'google',
    {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    }
);

module.exports = {
    googleLogin,
    googleCallback,
}