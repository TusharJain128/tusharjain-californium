const { response } = require("express")
const authorModel = require("../models/authorModel")
const authorSchema = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const bookSchema= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")
const publisherSchema = require("../models/publisherModel")

const createAuthor= async function(req,res){
    let data= req.body
    let author= await authorSchema.create(data)
    res.send({msg: author})
}

const createPublisher= async function(req,res){
    let data= req.body
    let publisher= await publisherSchema.create(data)
    res.send({msg: publisher})
}

const createBook= async function(req,res){
    let data= req.body
    let book= await bookSchema.create(data)
    res.send({msg: book})
}

const getBooks= async function(req,res){
    let allBooks= await bookSchema.findOne().populate('authorId publisher')
    let authorIdvalid= await authorSchema.findOne({_id: allBooks.authorId})
    if(authorIdvalid === null){
        res.send({msg: 'Please Enter valid author id'})
    }
    let publisherIdvalid= await publisherSchema.findOne({_id: allBooks.publisher})
    if(publisherIdvalid === null){
        res.send({msg: 'Please Enter valid publisher id'})
    }
    res.send({msg: allBooks})
}

const updatePublish= async function(req,res){
    let Data= await publisherModel.find({name:{ $in:['Penguin','HarperCollins']}})
    let id= Data.map(id=> id._id)
    let updatedData= await bookModel.updateMany(
        {publisher:{$in:id}},
        {$set: {isHardCover:true}},
        {new:true}
        )
        res.send({msg: updatedData})
}

const updatePrice=async function(req, res){

    let authorsId = await authorModel.find({ rating:{$gt:3.5}}).select({_id:1});
    let books=await bookModel.find({author:authorsId}).select({_id:1})
    for (let i= 0; i<books.length; i++) {
        let element = books[i];
        let update= await bookModel.findByIdAndUpdate(element,{$inc:{price:10}}, {new:true})
        console.log(update)
    }
    res.send({msg: 'result on console'})
}

module.exports.createAuthor=createAuthor
module.exports.createPublisher=createPublisher
module.exports.createBook=createBook
module.exports.getBooks= getBooks
module.exports.updatePublish=updatePublish
module.exports.updatePrice= updatePrice