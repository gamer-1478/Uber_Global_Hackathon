const pharma = require("../schemas/pharmaSchema");
const jwt = require("jsonwebtoken");
const { SendError } = require("../services/error");
const bcrypt = require("bcryptjs");

module.exports = {
  registerPharma: async (req, res) => {
    console.log("registerPharma");
    const {
      // mainPubKey,
      // fingerPubKey,
      email,
      phone,
      address,
      city,
      state,
      zip,
      country,
      name,
      username,
      password,
      confirmpassword,
    } = req.body;
    if (email.includes("@") === false) {
      return res.status(400).json({
        message: "Email is not valid",
      });
    }
    console.log(password);
    console.log(confirmpassword);
    if (password !== confirmpassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    } else if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newPharma = new pharma({
      // mainPubKey,
      // fingerPubKey,
      email,
      phone,
      address,
      city,
      state,
      zip,
      country,
      name,
      username,
      password: hashedPassword,
    });

    try {
      const savedPharma = await newPharma.save();

      //   will login and register together
      const token = jwt.sign(
        {
          id: savedPharma._id,
          email: savedPharma.email,
          name: savedPharma.name,
          address: savedPharma.address,
        },
        process.env.JWT_TOKEN
      );
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "strict",
        secure: true,
      });
      return res.status(200).json({
        message: "Pharma registered successfully",
        data: savedPharma,
      });
    } catch (err) {
      console.log(err);
      SendError(err.stack.toString());
      res.status(500).json({
        message: "Error registering pharma",
        error: err,
      });
    }
  },
  loginPharma: async (req, res) => {
    try {
      const username = req.body.username;
      const password = req.body.password;
      if (!username || !password) {
        return res.status(400).json({
          message: "Please enter all fields",
        });
      }
      // check if user exists
      const user = await pharma.findOne({ username });
      if (!user) {
        return res.status(400).json({
          message: "User does not exist",
        });
      }
      // check if password is correct
      const hashedPassword = user.password;
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
      if (!isPasswordCorrect) {
        return res.send({
          status: "error",
          message: "Password is incorrect",
        });
      }
      // jwt auth
      // const email = user.properties.email.title[0].text.content
      const token = jwt.sign(
        {
          id: savedPharma._id,
          email: savedPharma.email,
          name: savedPharma.name,
          address: savedPharma.address,
        },
        process.env.JWT_TOKEN
      );
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: "strict",
        secure: true,
      });
      return res.status(200).json({
        message: "Pharma logged in successfully",
      });
    } catch (err) {
      console.log(err);
      SendMessage(err.stack.toString());
      SendMessage("The server has crashed");
      return res.send({
        status: "error",
        message: "Some error occurred",
      });
    }
  },
};
