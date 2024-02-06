const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    author:{type:String,required:true},
    book_name:{type:String,required:true},
    book_price:{type:Number,required:true},
    book_type: {type:String,required:true},
    detailes:{
        publisd_date:{type:Date,required:true},
        rating :{type:String,required:true},
        printed_by :{type:String,required:true},
        book_copy_sales: {type:Number,required:true}
    },
    author_phase:{type:String,required:true},
    author_image:{type:String,required:true},
    book_image:{type:String,required:true},
    about_book_story:{type:String,required:true},
    userId:{type:String,required:true}
});

const BookModel=mongoose.model('book',bookSchema);

module.exports={
    BookModel
};