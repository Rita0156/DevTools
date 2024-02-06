
const { Router } = require('express')
require("dotenv").config()
const loginRouter = Router();
const Secreate_key=process.env.SECREATE_KEY;

const bcrypt=require('bcryptjs')

const { SignupModel}=require('../Models/signup')

loginRouter.post('/login', async (req, res, next) => {
    const { email, password } = req.body;
    let isUserEmail = await SignupModel.findOne({ userEmail: email })
    console.log(isUserEmail,"login");
    const hash=isUserEmail.userPassword;
    if (!isUserEmail) {
        res.json('User Email is not found please signup first or check your email')
    }
    else{
        bcrypt.compare(password, hash, function(err, result) {
            // result == false
            console.log("bcrypt function");
            if(err){
                console.log('inside error');
                res.json({message:"some error getting at login",err})
            }
            else {
                if(result){
                    console.log("going in result of login");
                 const token = jwt.sign({userId:isUserEmail._id},Secreate_key);
                 res.json({message:"Login successfull",token:token, user:{...isUserEmail}})
                 console.log('login successfull...',"token:",token);
                }
                else{
                    res.json('Invalid user credentioals');
                    console.log('login error');
                }
            }
        });
    }
})

module.exports={
    loginRouter
};