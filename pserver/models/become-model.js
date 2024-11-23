const { Schema, model } = require("mongoose");

const becomeModelSchema = new Schema({
    fullname: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true },
    height: { type: String, required: true },
    bust: { type: String, required: true },
    waist: { type: String, required: true },
    hip: { type: String, required: true },
    eyes: { type: String, required: true },
    hair: { type: String, required: true },
    // model: { type: String, required: true },
    

});

// create a modal or a collection 

const becomeModel = new model("becomeModel", becomeModelSchema);
module.exports = becomeModel;