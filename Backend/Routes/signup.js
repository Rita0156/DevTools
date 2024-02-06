
const {Router}=require('express')

const signupRouter=Router()

const bcrypt=require('bcrypt')

const { SignupModel}=require('../Models/signup')
signupRouter.post('/signup',async(req,res)=>{
   const {email,password,name}=req.body;
   console.log(req.body,'req body');
   let isPresent=await SignupModel.find({userEmail:email})
   if(isPresent==true){
    req.send('User email is already have account');
   }
   else if(isPresent==false){
    bcrypt.hash(password, 5, async function(err, hash) {
        // Store hash in your password DB.
        if(err){
            console.log("error at signup request",err);
            res.json({message:"Something went wrong please try again",err});
        }
        let result=new SignupModel({
            userName:name,
            userPassword:password,
            userEmail:email
        })

        try{
          await result.save()
          res.json({message:'Signup successfull!'})
          console.log('signup done',result,'results');
        }
        catch(err){
          res.json('Something went wrong');
          console.log('catch blog error at signup',err);
        }
       
    });
   }
});

module.exports={signupRouter}