const express=require("express")
const router=express.Router()
const users=require("../controllers/userController")

router.post("/auth",users)

module.exports=router