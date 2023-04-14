import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () =>{
    try{
        let conn = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log(`Connected MongoDB Database ${mongoose.connection.host}`.bgMagenta.white)
    }
    catch(error){
        console.log(`MongoDB error ${error}`.bgRed.white)
    }
}

export default connectDB;
