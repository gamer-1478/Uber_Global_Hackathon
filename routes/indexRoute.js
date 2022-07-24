//import files
const auth = require("../services/auth");

//import modules
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render('index.ejs', { title: "Displicare" });
});



module.exports = router;
