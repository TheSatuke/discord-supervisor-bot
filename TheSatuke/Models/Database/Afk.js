const { Schema, model } = require("mongoose");

const schema = Schema({
  guildID: { type: String, default: "" },
  userID: { type: String, default: "" },
  reason: { type: Array, default: [] },
  date:  { type: Number, default: Date.now() }
});

module.exports = model("satukeAFK", schema);
