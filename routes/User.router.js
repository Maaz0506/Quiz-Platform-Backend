const express=require("express")
const router=express.Router()
const users=require("../controllers/userController")
const login=require("../controllers/loginController")

router.post("/register",users.addUser)
router.post("/login",login.handleLogin)
router.get("/getAll",users.getAllUsers)
module.exports=router