import mongoose from "mongoose";
import validator from "validator";
let UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is Required']
    },
    email:{
        type:String,
        required:[true,'Email is Required'],
        unique:true,
        validator:validator.isEmail
    },
    password:{
        type:String,
        required:[true,'Passpord is Required'],
        minlength:[6,'Password should be greater than 6 character'],
        select:true
    },
    location:{
        type:String,
        default:'India'
    }

},{timestamps:true})

export default mongoose.model("User",UserSchema)