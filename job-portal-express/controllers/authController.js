export const registerController = (req,res)=>{
    const {name} = req.body;
    res.status(200).send(`your name is ${name}`)
}