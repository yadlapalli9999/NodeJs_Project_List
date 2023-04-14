import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () =>{
    try{
        let conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected MongoDB Database ${process.env.MONGO_URI}`.bgMagenta.white)
    }
    catch(error){
        console.log(`MongoDB error ${error}`.bgRed.white)
    }
}

export default connectDB;
