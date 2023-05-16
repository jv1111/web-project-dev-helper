const KeyModel = require("../models/KeyModel");
const EmailModel = require("../models/EmailModel");
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
    //send emial
    const mailerResponse = await mailer(
        sender,
        receiver,
        subject,
        text,
        html
    );
    //create email record
    const emailRecord = new EmailModel({
        sender: sender,
        receiver: receiver,
        subject: subject,
        text: text,
        html: html
    });
    await emailRecord.save();

    return { message: mailerResponse.message }
}

module.exports = {
    getKey,
    sendEmail
}