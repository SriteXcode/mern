const {z} = require("zod");


const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message : "Invalid email address"})
    .min(3,{message : "email must be at least 3 chaars"})
    .max(255,{message:"email must not be more then 255 character"}),

    password: z
    .string({required_error:"password is required"})
    .min(7,{message : "password must be at least 6 chaars"})
    .max(1024,{message:"password must not be more then 255 character"}),
    
}); 





// create a  object schema 
const signupSchema = loginSchema.extend({
    username: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message : "Name must be at least 3 chaars"})
    .max(255,{message:"Name must not be more then 255 character"}),

   
    phone: z
    .string({required_error:"Phone no. is required"})
    .trim()
    .min(10,{message : "phone no. must be at least 10 chaars"})
    .max(20,{message:"phone no. must not be more then 255 character"}),
    
});



module.exports= {signupSchema, loginSchema};