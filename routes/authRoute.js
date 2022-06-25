const auth = require("../services/auth");
const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  // how to filter patient , hosp and pharma ???
  return await auth.register(req, res);
});

router.post("/login", async (req, res) => {
  return await auth.login(req, res);
});

module.exports = router;
