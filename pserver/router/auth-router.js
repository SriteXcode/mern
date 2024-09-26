const express = require("express");
const router = express.Router();
const authControllers = require("../controller/auth-controller");
const {signupSchema, loginSchema} = require("../validator/auth-validator");
// const loginSchemaa = require("../validator/auth-validator");
const validate = require("../middleware/validate-middleware");
const authMiddleware = require("../middleware/auth-middleware")
// const {home,loveu,register} = require("../controller/auth-controller")
// above line used in place of 3rd line authcontrollers but that is good

router.route("/").get(authControllers.home);
router.route("/loveu").get(authControllers.loveu);
router.route("/register").post(validate(signupSchema), authControllers.register);
router.route("/login").post(validate(loginSchema), authControllers.login);
router.route('/user').get(authMiddleware, authControllers.user);

router.route("/msg",(req,res)=>{
    res.status(200).send("this is msg from router")
}) 

module.exports = router;