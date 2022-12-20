const mongoose= require('mongoose')

const bookSchema= new mongoose.Schema(
   { 
    name:String,
    author_id:{
        type: Number,
        required: true
    },
    price:Number,
    ratings:Number
}, {timestamp: true} )

module.exports= mongoose.model("booksLibrary", bookSchema)