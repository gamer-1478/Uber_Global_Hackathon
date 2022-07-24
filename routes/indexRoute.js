//import files
const auth = require("../services/auth");

//import modules
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render('index.ejs', { title: "Displicare" });
});

router.get("/register", (req, res) => {
  res.render('register.ejs', { title: "Registeration" });
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});



module.exports = router;
