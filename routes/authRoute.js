const auth = require("../services/auth");
const router = require("express").Router();

router.post("/login", async (req, res) => {
  return await auth.login(req, res);
});

module.exports = router;
