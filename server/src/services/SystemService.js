const KeyModel = require("../models/KeyModel");
const mailer = require("../utils/mailer");

const getKey = async (userId) => {
    const key = await KeyModel.findOne({
        userId: userId
    });
    if (!key) return { error: "Key not found" }
    return key;
}

const sendEmail = async (data) => {
    const { sender, receiver, subject, text, html } = data;
    const response = await mailer(
        sender,
        receiver,
        subject,
        text,
        html
    );
    console.log("here");
    console.log(response);
    return { message: "Mail sent" }
}

module.exports = {
    getKey,
    sendEmail
}