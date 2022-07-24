const router = require("express").Router();
const auth = require("../services/auth");

router.get("/register", (req, res) => {
  res.render("user/register", { title: "Register User" });
});

router.post("/register", (req, res) => {
  return auth.registerUser(req, res);
});
