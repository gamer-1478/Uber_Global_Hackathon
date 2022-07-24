const auth = require("../services/auth");
const router = require("express").Router();

// Pharma Section
router.get("/pharma/register", (req, res) => {
    res.render("pharma/register", { title: "Pharma Register" });
});

router.get("/pharma/login", (req, res) => {
    res.render("pharma/login", { title: "Pharma Login" });
});

router.post("/pharma/login", async (req, res) => {
    return await auth.loginPharma(req, res);
});

router.post("/pharma/register", async (req, res) => {
    console.log("router");
    return await auth.registerPharma(req, res);
});

module.exports = router;
