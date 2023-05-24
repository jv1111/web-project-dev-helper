require("dotenv").config();//load env variables
require("./DatabaseConnection");//connect database
const passport = require("passport");
require("./PassportConfig")(passport);//load passport config and strategies
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true// Set credentials to true to enable passing cookies to the client. This is necessary for our server to save session cookies on the client's browser
}));
app.use(express.json());//To be able to read json data from the request (e.g req.body = {user:user})
app.use(require("./AppSession.js"));//use session
app.set('trust proxy', 1) // trust first proxy
app.use(passport.initialize());
app.use(passport.session());//enables Passport.js to deserialize the user object from the session data. 

app.use("/auth", require("./routes/AuthRoute.js"));
app.use("/system", require("./routes/SystemRoute"));

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});