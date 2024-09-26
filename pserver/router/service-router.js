const express = require("express");
const Services = require("../controller/service-controller");
const router = express.Router();

router.route("/service").get(Services);

module.exports= router;