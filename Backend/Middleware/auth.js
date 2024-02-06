require("dotenv").config()
const Secreate_key=process.env.SECREATE_KEY
const jwt=require('jsonwebtoken')

const authontication=(req,res,next)=>{
        if(!req.headeres.authorazation){
            res.json("Please Signup First")
        }
}

module.exports={
    authontication
}