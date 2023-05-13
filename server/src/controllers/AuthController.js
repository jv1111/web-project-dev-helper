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

const getSession = (req, res) => {
    // if no user is logged in
    if (!req.user) {
        return res.status(401).json({
            error: "There is no active session"
        });
    }

    // get and send logged in user info
    const { _id, email, username, createdAt } = req.user;
    const imgUrl = req.user.profileImg.url;
    res.status(200).json({
        success: true,
        user: {
            id: _id,
            email: email,
            username: username,
            profileImg: imgUrl,
            createdAt: createdAt
        }
    });
}

const logout = (req, res) => {
    try {
        req.logout((error) => {
            if (error) throw error;
        });
        res.status(200).json({ message: 'logged out successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    googleLogin,
    googleCallback,
    getSession,
    logout
}