const express=require('express')
const cors=require('cors')
require("dotenv").config()
const { connectionDB}=require("./Config/db");
const {signupRouter}=require("./Routes/signup")
const {loginRouter}=require('./Routes/login')
const Port=process.env.PORT || 7500
const { bookRoute}=require('./Routes/books')
const {authontication}=require('./Middleware/auth')
const app=express()

app.use(express.json())

app.use(cors())

app.get('/',(req,res,next)=>{

    res.send("Book app running currectly....")
})
app.use('/',signupRouter)
app.use('/',loginRouter)
app.use(authontication);
app.use('/',bookRoute)

app.listen(Port,async()=>{
    console.log('book app running on port:----',Port);
    try{
        await connectionDB;
       console.log('connected to db successfully');
    }
    catch(err){
       console.log("connected to db failed");
       console.log("failed error is ---",err);
    }
})