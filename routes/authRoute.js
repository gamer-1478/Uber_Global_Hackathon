const auth = require("../services/auth");
const router = require("express").Router();

router.get("/login", (req, res) => {
  res.render("login");
});

// Pharma Section
router.get("/pharma/register", (req, res) => {
  res.render("pharma/register");
});

router.post("/pharma/register", async (req, res) => {
  console.log("router");
  return await auth.registerPharma(req, res);
});

// Hospital Section
router.get("/hospital/register", (req, res) => {
  res.render("hospital/register");
});

router.post("/hospital/register", (req, res) => {
  return auth.registerHospital(req, res);
});

router.post("/login", async (req, res) => {
  return await auth.login(req, res);
});

module.exports = router;
