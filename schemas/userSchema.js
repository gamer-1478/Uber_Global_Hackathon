const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reqString = { type: String, required: true };

const userSchema = new Schema(
  {
    email: reqString,
    password: reqString,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
