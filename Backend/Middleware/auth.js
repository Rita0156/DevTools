require("dotenv").config()
const Secreate_key=process.env.SECREATE_KEY
const jwt=require('jsonwebtoken')

const authontication=(req,res,next)=>{
    if(!req.headers.authorization){
        res.json("signup first");
    }
    //console.log(req.headers,"header");


    const token = req.headers.authorization.split(" ")[1];
    
      console.log(token,"token");

      
    jwt.verify(token, Secreate_key, function (err, decoded) {
        
        if (err) {
            res.json({Message:"Please login again authentication failed",err})
        }

        req.body.userId=decoded.userId;
        // res.json({message:"aa ja bata"});
        next();
      });
}

module.exports={
    authontication
}