const auth = require("../services/auth");
const router = require("express").Router();


// Pharma Section
router.get("/pharma/register", (req, res) => {
  res.render("pharma/register", {title: "Register"});
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

// Doctor Section
router.get("/doctor/register", (req, res) => {
  res.render("doctor/register");
});

router.post("/doctor/register", (req, res) => {
  return auth.registerDoctor(req, res);
});

router.post("/login", async (req, res) => {
  return await auth.login(req, res);
});

module.exports = router;
