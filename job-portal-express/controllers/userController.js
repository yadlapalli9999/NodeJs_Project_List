import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const updateUserController = async(req,res) =>{
    const { name, email, lastName, location } = req.body;
  if (!name || !email  || !location) {
    next("Please Provide All Fields");
  }
  const user = await userModel.findOne({ _id: req.user.userId });
  user.name = name;
  user.email = email;
  user.location = location;

  await user.save();
  let token  =jwt.sign({userId:user._id},process.env.JWT_SECRET,{
    expiresIn:'1d'
   })
  res.status(200).json({
    user,
    token,
  });
}