const GoogleUserModel = require("../models/GoogleUserModel.js");
const KeyModel = require("../models/KeyModel");
const { keyGenerator } = require("../utils/keyGenerator.js");

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
    const key = keyGenerator(12);
    const newKey = new KeyModel({
        userId: newUser._id,
        key: key,
    });
    console.log(newKey);
    await newUser.save();
    await newKey.save();

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