const GoogleStrategy = require("passport-google-oauth20");
const AuthService = require('./services/AuthService.js');

module.exports = (passport) => {
    // ----GOOGLE_STRATEGY----
    passport.use(new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `${process.env.BASE_URL}/auth/google/callback`
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const user = await AuthService.findOrCreate(profile._json);
                done(null, user);
            } catch (error) {
                done(new Error(error), false);
            }
        }
    ));

    passport.serializeUser(async (user, done) => {
        console.log('serializing');
        done(null, user.id);  // Save the user ID to the session
    });
    passport.deserializeUser(async (id, done) => {
        console.log('deserializing');
        const user = await AuthService.getUserById(id);//Retrieve the user from the database using the ID stored in the session
        if (!user) done(null, { error: "error" });
        done(null, user);// Passes the user object to the 'done' function which will then store the user in the 'req.user' property.
    });
}