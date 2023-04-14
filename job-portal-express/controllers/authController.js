import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
export const registerController = async(req,res)=>{
   try{
      let {name,email,password} = req.body;
      const salt = await bcrypt.genSalt(10);
       password = await bcrypt.hash(password,salt)
       let existingUser = await userModel.findOne({email});
       if(existingUser){
        return res.status(200).send({
            success:false,
            message:'Email Already Registerd please login'
        }) 
       }
       const user = await userModel.create({name,email,password})
      const token =  jwt.sign({userId:user._id},process.env.JWT_SECRET,{
        expiresIn:'1d'
       })
       res.status(201).send({
           success:true,
           message:"User Register Successfully",
           user,
           token
       })
   }
   catch(error){
    console.log(error)
    res.status(400).send({
        success:false,
        message:"Error in Register controller",
        error
    })
   }
}