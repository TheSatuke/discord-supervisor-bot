const mongoose = require("mongoose");

const register = mongoose.Schema({
    userID: String,
    scoreCount: Number,
    scoreGirl: Number,
    scoreMan: Number
});

module.exports = mongoose.model("Registries", register)