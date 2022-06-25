const mongoose = require("mongoose"),
  moment = require("moment");

// constant variables
const reqString = { type: String, required: true },
  reqStringFalseDefEmpty = { type: String, required: false, default: "" },
  reqStringFalse = { type: String, required: false },
  reqBool = { type: Boolean, required: true, default: false },
  reqBoolFalse = { type: Boolean, required: false, default: false },
  dateStringWithTime = moment(new Date()).format("YYYY-MM-DD HH:MM:SS");

// Schema
const pharmaSchema = new mongoose.Schema(
  {
    mainPubKey: reqString,
    fingerPubKey: reqStringFalse,
    email: reqString,
    phone: reqStringFalse,
    // dateCreated: { type: Date, default: dateStringWithTime },
    address: reqString,
    city: reqString,
    state: reqString,
    zip: reqString,
    country: reqString,
    firstName: reqString,
    lastName: reqString,
  },
  { timestamps: true }
);

// Export Schema
module.exports = mongoose.model("Pharma", pharmaSchema);
