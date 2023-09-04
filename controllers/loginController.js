const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")



const handleLogin=async(req,res)=>{
    const {email,password}=req.body;
    if (!email || !password) res.status(400).json({"message":"Email and password is required"})
    const foundUser=users.find(person=>person.email===email);
    if (!foundUser) res.sendStatus(401)
    const match=await bcrypt.compare(password,foundUser.password);
if(match){
     const accessToken=jwt.sign(
        {"email":foundUser.email},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'300s'}
     );
     const refreshtoken=jwt.sign(
        {"email":foundUser.email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:'1d '}
     ); 
     const otherUsers=users.filter(person=>person.email!==foundUser.email)
     const currentUser={...foundUser,refreshtoken}
     users
    res.json({"success":`Sign in successful`})
}else{
    res.sendStatus(401)
}

}
module.exports={handleLogin}