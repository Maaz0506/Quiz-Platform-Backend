const db=require("../models")
const User=db.users;
const { v4: uuidv4 } = require('uuid');


const addUser=async(req,res)=>{
    let info={
        userId:uuidv4(),
        email:req.body.email,
        username:req.body.username,
        password:req.body.password,
    }
    const user=await User.create(info)
    res.status(200).send(user)
}
module.exports=addUser