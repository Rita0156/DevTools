
const { Router } = require('express')
require("dotenv").config()
const loginRouter = Router();
const Secreate_key=process.env.SECREATE_KEY;
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

const { SignupModel}=require('../Models/signup')

loginRouter.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    let isUserEmail = await SignupModel.findOne({ userEmail: email })
    console.log(isUserEmail,"login", req.body, "request body");
    const hash=isUserEmail.userPassword;
    if (!isUserEmail) {
        res.json('User Email is not found please signup first or check your email')
    }
    else{
        bcrypt.compare(password, hash, function(err, result) {
            // result == true
            //console.log(hash,"   ",password)
            //console.log(hash," ",pass)'
            if(err){
                //console.log("in err condi",err)
                res.json("error getting")
            }
            
           //console.log(err, "errere",pass,"pass",hash,"hash")
            if(result){
                
                  const token=jwt.sign({ userId:isUserEmail._id,name:isUserEmail.userName},Secreate_key);
                  console.log(token,"token")
                  res.json({message:"Login successfull",token:token,name:isUserEmail.name});
            }else{
                res.json("Invalid credential");
                
                console.log("error getting user email not valid");
            }
            
        });
    }
})

module.exports={
    loginRouter
};