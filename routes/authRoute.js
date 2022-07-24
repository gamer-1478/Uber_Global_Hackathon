const auth = require("../services/auth");
const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render('register.ejs', { title: "Registeration" });
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});


module.exports = router;