
const mongoose=require('mongoose');

const signupSchema=new mongoose.Schema({
    userName:{type:String,required:true},
    userEmail:{type:String,required:true},
    userPassword:{type:String,required:true}
});

const SignupModel=mongoose.model('registration',signupSchema);

module.exports={
    SignupModel
};