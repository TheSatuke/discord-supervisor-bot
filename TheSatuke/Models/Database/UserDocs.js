const mongoose = require("mongoose");

const userdocs = new mongoose.Schema({
    userName: String,
    userID: String,
    authID: String,
    roleID: String,
    date: Date
});

module.exports = mongoose.model("UserDocs", userdocs)