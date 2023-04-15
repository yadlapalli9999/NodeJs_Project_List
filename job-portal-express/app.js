import express  from "express";
import  dotEnv  from "dotenv";
import colors from 'colors';
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRouters from './routers/authRoutes.js';
import userRouters from "./routers/userRoutes.js";
dotEnv.config()

connectDB()
const port = process.env.PORT || 8080;
const app = express();
//middleware
app.use(express.json())
app.use(cors());
app.use(morgan('dev'));


app.get("/",(req,res)=>{
    res.send("Welcome to JOb Portal Application")
})
app.use('/api/v1/auth',authRouters);
app.use('/api/v1/user', userRouters)
   
app.listen(port,()=>{
    console.log(`Server Running in ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white)
})