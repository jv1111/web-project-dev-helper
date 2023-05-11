const GoogleUserModel = require("../models/GoogleUserModel.js");

// google authentication
const findOrCreate = async (userData) => {
    const { given_name, picture, email } = userData;

    // check if user exist
    const user = await GoogleUserModel.findOne({ email: email });
    if (user) return user;

    const newUser = new GoogleUserModel({
        username: given_name,
        email: email,
        profileImg: {
            url: picture
        },
    });
    await newUser.save();

    return newUser;
}

const getUserById = async (id) => {
    const googleUser = await GoogleUserModel.findById(id);
    return googleUser;
}

module.exports = {
    findOrCreate,
    getUserById
}