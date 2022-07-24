const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reqString = { type: String, required: true };

const docSchema = new Schema(
  {
    firstName: reqString,
    lastName: reqString,
    email: reqString,
    phone: reqString,
    username: reqString,
    hospitalID: reqString,
    hospitalName: reqString,
    hospitalAddress: reqString,
    speciality: reqString,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", docSchema);
