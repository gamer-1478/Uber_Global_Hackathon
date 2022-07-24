const jwt = require("jsonwebtoken");
const JWT_TOKEN = process.env.JWT_TOKEN;
const { SendError } = require("../services/error");
const Pharma = require("../models/pharmaSchema");
const Doctor = require("../models/doctorSchema");

module.exports = {
  checkPharma: async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
      // check if req is coming from register then redirect to register otherwise login
      return res.redirect("/login");
    }
    try {
      const decoded = jwt.verify(token, jwt_token);
      const user = await Pharma.findById(decoded.id);
      if (!user) {
        res.redirect("/");
      }
      req.user = {
        id: user._id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
        city: user.city,
        state: user.state,
        zip: user.zip,
        country: user.country,
      };
      return next();
    } catch (err) {
      console.log(err);
      SendError(err.stack.toString());
      res.redirect("/");
    }
  },
  checkDoc: async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
      // check if req is coming from register then redirect to register otherwise login
      return res.redirect("/login");
    }
    try {
      const decoded = jwt.verify(token, jwt_token);
      const user = await Doctor.findById(decoded.id);
      if (!user) {
        res.redirect("/");
      }
      req.user = {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        hospitalId: user.hospitalId,
        hospitalName: user.hospitalName,
        hospitalAddress: user.hospitalAddress,
        speciality: user.speciality,
        phone: user.phone,
      };
      return next();
    } catch (err) {
      console.log(err);
      SendError(err.stack.toString());
      res.redirect("/");
    }
  },
  checkHospital: async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
      // check if req is coming from register then redirect to register otherwise login
      return res.redirect("/login");
    }
    try {
      const decoded = jwt.verify(token, jwt_token);
      const user = await Doctor.findById(decoded.id);
      if (!user) {
        res.redirect("/");
      }
      req.user = {
        id: user._id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
        city: user.city,
        state: user.state,
        zip: user.zip,
        country: user.country,
      };
      return next();
    } catch (err) {
      console.log(err);
      SendError(err.stack.toString());
      res.redirect("/");
    }
  },
  checkUser: async (req, res, next) => {},
};
