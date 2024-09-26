const User = require("../models/user-model");
const bcrypt = require("bcryptjs");
//home logic
const home = async (req, res) => {
    try {
        res
            .status(200)
            .send("this is home from controller")
    }
    catch (error) {

    }
}


const loveu = async (req, res) => {
    try {
        res
            .status(200)
            .send("love u meri jaanm from controller");
    } catch (error) {
        console.log("error!");
    }
};



// Registration logic

const register = async (req, res) => {
    try {
        console.log(req.body);
        
        const { username, email, phone, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "email already exists" });
        }


        // hash the password  //this can be also done through user model file 
        // const saltRound = 5;
        // const hash_password = await bcrypt.hash(password,saltRound);
        //this process complete if write password:hash_password in 46 line

        const userCreated = await User.create({ username, email, phone, password,});
        res
            .status(201)
            .json({ msg: userCreated, token: await userCreated.generateToken(), userId: userCreated._id.toString(), });
    } catch (error) {
        res
            .status(500)
            .json("Internal server error!")
    }
};

// login logic
const login = async (req, res) => {
    try {
        console.log("login page");
        const { email, password } = req.body;
        console.log("email",email);
        const userExist = await User.findOne({ email });
        console.log("userExistss", userExist);

        if (!userExist) {
            console.log("emailnotfound");
            return res.status(400).json({ message: "Invalid EMAIL" });
        }

        const userpasswordvld = await bcrypt.compare(password, userExist.password);
        // const userpasswordvld = await userExist.password(password);
        console.log(userpasswordvld);
        if (userpasswordvld){
            res.status(200).json({ 
                msg: "userLogin",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
             });
        }else{
            res.status(401).json({message:"Invalid password"})
        }
           
    }
    catch (error) {
        console.error("not login");
        return res.status(500).json({ message: "Internal Server Error" });
    }

};

// to send user data user logic

const user = async(req,res) =>{
    try {
        const userData = req.user;
        console.log(userData);
        res.status(200).json({userData});
    } catch (error) {
        console.log(`Error from user route ${error}`)
    }

}

module.exports = { home, loveu, register, login, user };