const {Router}=require('express')
const { BookModel }=require('../Models/books')

const bookRoute=Router()

bookRoute.get('/book',async(req,res)=>{
     const results=await BookModel.find();
     res.json(results)
     console.log(results,"result from book router get request");
})

bookRoute.post('/book/create',async(req,res)=>{
   const {book_name,book_price,book_type,author_phase,userId,indexPage,about_book_story,book_image,author_image,detailes:{rating,printed_by,book_copy_sales},author}=req.body;
   console.log(req.body,'book route post request');
   let curTime=new Date()
   const currentTimedate=curTime.getDay()+"/"+curTime.getMonth()+'/'+curTime.getFullYear()+"//"+curTime.getHours()+":"+curTime.getMinutes()+':'+curTime.getSeconds()
   const bookData=new BookModel({
    book_name,
    book_price,
    book_type,
    author_phase,
    userId,
    indexPage,
    about_book_story,
    book_image,
    author_image,
    detailes : {
       publisd_date:currentTimedate,
       printed_by,
       rating,
       book_copy_sales
    },
    author
})
   try{
           
          console.log('book post route try blok');
           await bookData.save()
           res.json({message:'Book Publish successfully'})
   }
   catch(err){
         console.log('getting erron at book route post request',err);
         res.json({message:"Something went wrong pleaese try again",err})
   }
})

// author:{type:String,required:true},
//     book_name:{type:String,required:true},
//     book_price:{type:Number,required:true},
//     book_type: {type:String,required:true},
//     detailes:{
//         publisd_date:{type:Date,required:true},
//         rating :{type:String,required:true},
//         printed_by :{type:String,required:true},
//         book_copy_sales: {type:Number,required:true}
//     },
//     author_phase:{type:String,required:true},
//     author_image:{type:String,required:true},
//     book_image:{type:String,required:true},
//     about_book_story:{type:String,required:true},
//     userId:{type:String,required:true},
//     indexPage:{type:String,required:true}

module.exports={
    bookRoute
}