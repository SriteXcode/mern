// const {v2} = require('cloudinary');
// const fs = require("fs")

// v2.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API, 
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const uploadOnCloudinary = async (localFilePath) =>{
//     try {
//         if(!localFilePath) return "path not found"
// // file uploading 
//       const response = await cloudinary.uploader.upload(localFilePath, {
//             resource_type: "image"
//         })
//         // file has been uploading
//         console.log(response);
//         return response;
        
//     } catch (error) {
//         console.log("error from file upload", error);
//         fs.unlinkSync(localFilePath) //remove the locally saved file as operation got failed
//     }
// }

// module.exports = {uploadOnCloudinary};

