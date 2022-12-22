const cardModel= require('../models/cardModel')
const customerModel= require('../models/customerModel')

const customerList= async function(req,res){
    let list=await customerModel.find({status: 'ACTIVE'})
    res.send({msg: list})
}

const customerDelete=async function(req,res){
    let data= req.body
    let deleted=await customerModel.findOneAndUpdate(
        data,
        {isDeleted: true, status: "INACTIVE"}
    )
    res.send({msg: deleted})
}

const newCustomer=async function(req,res){
    let data= req.body
    let create= await customerModel.create(data)
    res.send({msg: create})
}

const cardList= async function(req, res){
    let list= await cardModel.find()
    res.send({msg: list})
}

const newCard= async function(req,res){
    let data= req.body
    let addCustomerId= await customerModel.findOne({firstName: data.customerName}).select({customerID:1,_id:0})
    let addCardNumber= await cardModel.find().count()+1
    data.customerID = addCustomerId
    data.cardNumber = "C"+addCardNumber
    let createCard= await cardModel.create(data)
    res.send({msg: createCard})
}

module.exports.customerList=customerList
module.exports.customerDelete= customerDelete
module.exports.newCustomer= newCustomer

module.exports.cardList= cardList
module.exports.newCard= newCard