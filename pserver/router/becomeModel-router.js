const express = require("express");
const router = express.Router();
// const upload = require("../middleware/multer-middleware")
const becomeModelForm = require("../controller/becomeModel-controller");

router.route("/becomemodel").post(becomeModelForm);

module.exports = router;