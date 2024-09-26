const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;
// const URI = "mongodb+srv://Sri:SriteX01@cluster0.bwwkgu7.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(URI);

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log('connection stablished');
    } catch (error) {
        console.log("database connection failed");
        process.exit(0);
    } 
}
 
module.exports = connectDb;