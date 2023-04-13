const express = require("express");
const port = process.env.PORT || 8080;
const app = express();


app.get("/",(req,res)=>{
    res.send("Welcome to JOb Portal Application")
})

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`)
})