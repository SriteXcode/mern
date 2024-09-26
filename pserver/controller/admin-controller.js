const User = require("../models/user-model");
const Contact = require("../models/contact-modal");

const getAllUsers = async (req,res)=>{
    try {
        
        const users = await User.find({},{password:0});
        console.log("admin-contrlleer",users)
        if(!users || users.length===0){
            return res.status(404).json({message:"nouser found"});   
        }
        return res.status(200).json(users);
    } catch (error) {
        console.log("admin controller user",error);
        next(error);
    }
}

// user data update logic, get single user data
const getUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({_id:id},{password:0});
        return res.status(200).json({message:data});
    } catch (error) {
        console.log("updation error",error);
        next(error);
    }
    }


    // user update logic

    const updateUserById = async (req,res) => {
        try {
            const id = req.params.id;
            const UpdateUserdata = req.body;


            const UpdateUser = await User.updateOne({_id:id},{$set:UpdateUserdata});
            return res.status(200).json(UpdateUser);
            
        } catch (error) {
            next(error);
        }
    }


// user delete logic

const deleteUserById = async (req,res) => {
try {
    const id = req.params.id;
    await User.deleteOne({_id:id});
    return res.status(200).json({message:"User Deleted Successfully"});
} catch (error) {
    console.log("deletion error",error);
    next(error);
}
}

// getALLCONTACTS LOGIC

const getAllContacts= async (req,res)=>{
    try {
        
        const contacts = await Contact.find();
        console.log("admin-contrlleer",contacts)
        if(!contacts || contacts.length===0){
            return res.status(404).json({message:"no Contacts found"});   
        }
        return res.status(200).json(contacts);
    } catch (error) {
        console.log("admin controller contacts",error);
        next(error);
    }
}

// contacts delete logic

const deleteContactById = async (req,res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"Contact Deleted Successfully"});
    } catch (error) {
        console.log("deletion error",error);
        next(error);
    }
    }

module.exports = {getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById};