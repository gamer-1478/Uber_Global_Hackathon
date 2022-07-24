const auth = require("../services/auth");
const router = require("express").Router();


// Hospital Section
router.get("/hospital/register", (req, res) => {
    res.render("hospital/register", { title: "Register Hospital" });
});

router.get("/hospital/login", (req, res) => {
    res.render("hospital/login", { title: "Hospital Login" });
});

router.post("/hospital/login", (req, res) => {
    return auth.loginHospital(req, res);
});


router.post("/hospital/register", (req, res) => {
    return auth.registerHospital(req, res);
});


module.exports = router;
