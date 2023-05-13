const mongoose = require("mongoose");

const KeySchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        unique: true
    },
    key: {
        type: String,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Key = mongoose.model('Key', KeySchema);
module.exports = Key;