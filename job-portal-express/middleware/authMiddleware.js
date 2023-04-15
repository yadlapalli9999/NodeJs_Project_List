import jwt from "jsonwebtoken";

const userAuth = async(req,res,next)=>{
   
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer')){
         res.status(401).send({message:'Auth Failed'})
    }
    const token = authHeader.split(" ")[1];
   try{
      const payload = jwt.verify(token,process.env.JWT_SECRET)
      req.user = {userId:payload.userId}
      next()
   }
   catch(error){
     res.status(401).send({message:'Auth Failed'})
   }
}
export default userAuth