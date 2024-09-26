const Service = require("../models/service-modal");

const Services = async (req,res)=>{
    try {
        const response = await Service.find();
       
       if(!response){
        res.status(404).json({"No services found":msg});
    return;   
    }

        res.status(200).json({message:response})
    } catch (error) {
        console.log("services",`${error}`);
    }
}

module.exports = Services;