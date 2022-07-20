const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reqString = { type: String, required: true };

const hospitalSchema = new Schema(
  {
    name: reqString,
    address: reqString,
    city: reqString,
    state: reqString,
    zip: reqString,
    country: reqString,
    phone: reqString,
    email: reqString,
    password: reqString,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hospital", hospitalSchema);
