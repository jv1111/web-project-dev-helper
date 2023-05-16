const KeyModel = require("../models/KeyModel");

const KeyValidation = async (req, res, next) => {
    const { userId, key } = req.body;
    const userKey = await KeyModel.findOne({
        userId: userId,
        key: key
    });
    if (!userKey) return res.status(401).json({ error: "Cannot find key" })
    next();
}

module.exports = {
    KeyValidation
}