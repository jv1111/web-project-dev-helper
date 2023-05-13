const KeyModel = require("../models/KeyModel");

const getKey = async (userId) => {
    const key = await KeyModel.findOne({
        userId: userId
    });
    if (!key) return { error: "Key not found" }
    return key;
}

module.exports = {
    getKey
}