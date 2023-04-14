import express  from "express";
import  dotEnv  from "dotenv";
import colors from 'colors';
dotEnv.config()
const port = process.env.PORT || 8080;
const app = express();


app.get("/",(req,res)=>{
    res.send("Welcome to JOb Portal Application")
})

app.listen(port,()=>{
    console.log(`Server Running in ${process.env.DEV_MODE} mode on port ${port}`.bgCyan.white)
})