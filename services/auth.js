const pharma = require("../schemas/pharmaSchema");
const jwt = require("jsonwebtoken");

module.exports = {
  registerPharma: async (req, res) => {
    const {
      mainPubKey,
      fingerPubKey,
      email,
      phone,
      address,
      city,
      state,
      zip,
      country,
      firstName,
      lastName,
    } = req.body;
    const newPharma = new pharma({
      mainPubKey,
      fingerPubKey,
      email,
      phone,
      address,
      city,
      state,
      zip,
      country,
      firstName,
      lastName,
    });
    try {
      const savedPharma = await newPharma.save();

      //   will login and register together
      const token = jwt.sign(
        {
          id: savedPharma._id,
          email: savedPharma.email,
          firstName: savedPharma.firstName,
          lastName: savedPharma.lastName,
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
      SendMessage(err.stack.toString());
      res.status(500).json({
        message: "Error registering pharma",
        error: err,
      });
    }
  },
  loginPharma: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      if (!email || !password) {
        return res.send({
          status: "error",
          message: "Please fill all the fields",
        });
      }
      if (email.includes("@") === false) {
        return res.send({
          status: "error",
          message: "Please enter a valid email",
        });
      }
      // check if user exists
      const user = [];
      if (user.length === 0) {
        return res.send({
          status: "error",
          message: "User does not exist",
        });
      }
      // check if password is correct
      const hashedPassword = "";
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
      if (!isPasswordCorrect) {
        return res.send({
          status: "error",
          message: "Password is incorrect",
        });
      }
      // jwt auth
      // const email = user.properties.email.title[0].text.content
      const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET);
      res.cookie("token", token);
      req.user = user;
      return res.send({
        status: "success",
        message: "User logged in successfully",
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
