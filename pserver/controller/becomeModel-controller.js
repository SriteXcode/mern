const becomeModel = require("../models/become-model");
const uploadOnCloudinary = require("../utils/cloudinary");
const becomeModelForm = async (req, res) => {
    try {
        const response = req.body;

//         const modelLocalPath = req.files?.model[0]?.Path;
//         if(!modelLocalPath){
//             throw new Error("File is required");
//         }

//         const model = await uploadOnCloudinary(modelLocalPath);

// if(!model){
//     throw new Error("File not uploaded");

// }

        await becomeModel.create(response);
        // console.log("model data",response);
        return res.status(200).json({ message: "user data submitted successfully!" });

    } catch (error) {
        return res.status(500).json({ message: "message not delivered" })
    }
};

module.exports = becomeModelForm;