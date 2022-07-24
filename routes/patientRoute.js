const auth = require("../services/auth");
const router = require("express").Router();

// Patient Section
router.get("/patient/register", (req, res) => {
    res.render("patient/register", { title: "Patient Register" });
});

router.get("/patient/login", (req, res) => {
    res.render("patient/login", { title: "Patient Login" });
});

router.post("/patient/register", async (req, res) => {
    console.log("router");
    return await auth.registerPatient(req, res);
});

module.exports = router;
