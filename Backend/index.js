const express=require('express')
const cors=require('cors')
require("dotenv").config()
const Port=process.env.PORT || 7500

const app=express()

app.use(express.json())

app.use(cors())

app.listen(Port,async()=>{
    console.log('book app running on port:----',Port);
    try{
       console.log('connected to db successfully');
    }
    catch(err){
       console.log("connected to db failed",err);
    }
})