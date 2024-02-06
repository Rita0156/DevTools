require("dotenv").config()
const mongoose=require('mongoose')
const Mongo_url=process.env.MONGO_URL;

const connectionDB=mongoose.connect(Mongo_url)

module.exports={
    connectionDB
}