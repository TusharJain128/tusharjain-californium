const bookSchema= require('../models/bookModel')
const authorSchema= require('../models/authorModel')


const createAuthorDetails= async function(req, res){
    let newData= req.body
    let createData= await authorSchema.create(newData)
    res.send({msg: createData})
}
const createBookDetails= async function(req, res){
    let newData= req.body
    let createData= await bookSchema.create(newData)
    res.send({msg: createData})
}

const chetanBhagatBooks= async function(req, res){
    let authorData= await authorSchema.findOne({author_name: "Chetan Bhagat"})
    let books= await bookSchema.find({author_id:authorData.author_id})
    res.send({msg: books})
}

const updateBookPrice= async function(req,res){
    let data= await bookSchema.findOneAndUpdate(
        {name: "Two states"},
        {price: 100}
    )
    let details= await authorSchema.find({author_id: data.author_id}).select({author_name:1,_id: 0})
    details.push({price: data.price})
    res.send({msg: details})
}

const selectedBooks= async function(req, res){
    let data= await bookSchema.find( { price : { $gte: 50, $lte: 100} } )
    let authorId= data.map(book=> book.author_id)
    let authorName= await authorSchema.find({author_id: {$in:authorId}}).select({author_name:1, _id:0})
    res.send({msg: authorName})
}

module.exports.createAuthorDetails= createAuthorDetails
module.exports.createBookDetails= createBookDetails
module.exports.chetanBhagatBooks= chetanBhagatBooks
module.exports.updateBookPrice= updateBookPrice
module.exports.selectedBooks= selectedBooks
