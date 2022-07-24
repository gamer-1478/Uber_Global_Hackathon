const auth = require("../services/auth");
const router = require("express").Router();


// Doctor Section
router.get("/doctor/register", (req, res) => {
    res.render("doctor/register", { title: "Register Doctor" });
});

router.post("/doctor/register", (req, res) => {
    return auth.registerDoctor(req, res);
});


module.exports = router;