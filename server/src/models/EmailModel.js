const mongoose = require("mongoose");
require("mongoose-type-email");//type: mongoose.SchemaTypes.Email

const EmailSchema = mongoose.Schema({
    sender: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true
    },
    receiver: {
        type: mongoose.SchemaType.Email,
        required: true,
        unique: true
    },
    subject: {
        type: String
    },
    html: {
        type: String,
    },
    text: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Email = mongoose.model('emails', EmailSchema);
module.exports = Email;