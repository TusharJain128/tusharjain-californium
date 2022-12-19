const bookSchema= require('../models/userModel')

const createBook= async function(req,res){
    let data=req.body
    let newbookdata= await bookSchema.create(data)
    res.send({msg: newbookdata})
}

const bookList= async function(req,res){
    let totalbookdata= await bookSchema.find()
    res.send({msg: totalbookdata})
}

const booksINYear= async function(req, res){
    let dataYear=req.query.year
    let bookDataYear= await bookSchema.find({ year: dataYear})
    res.send({msg: bookDataYear})
}

const particularBooks= async function(req, res){
    let getBook= req.body
    let latestBook= await bookSchema.find(getBook)
    res.send({msg: latestBook})
}

const priceTag= async function(req,res){
    
    let priceSelectedBooks= await bookSchema.find({indianPrice: {$or: ["100","200","500"]}})
    res.send({msg: priceSelectedBooks})
}

const randomBooks= async function(req,res){
    let largePageBooks= await bookSchema.find({pages: {$gt: "500"}})
    res.send({msg: largePageBooks})
}

module.exports.createBook= createBook
module.exports.bookList= bookList
module.exports.booksINYear= booksINYear
module.exports.priceTag= priceTag
module.exports.particularBooks= particularBooks
module.exports.randomBooks= randomBooks