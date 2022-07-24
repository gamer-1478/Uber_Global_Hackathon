const auth = require("../services/auth");
const router = require("express").Router();


// Doctor Section
router.get("/doctor/register", (req, res) => {
    res.render("doctor/register", { title: "Register Doctor" });
});

router.get("/doctor/login", (req, res) => {
    res.render("doctor/login", { title: "Doctor Login" });
});

router.post("/doctor/login", (req, res) => {
    return auth.loginDoctor(req, res);
});

router.post("/doctor/register", (req, res) => {
    return auth.registerDoctor(req, res);
});


module.exports = router;