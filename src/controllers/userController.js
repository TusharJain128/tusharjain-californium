const userSchema= require('../models/userModel')
const jwt= require('jsonwebtoken')
const { sensitiveHeaders } = require('http2')

const registerUser= async function(req,res){
    let data= await userSchema.create(req.body)
    res.send({data: data})
}

const loginUser= async function(req,res){
    let data= req.body
    let loginMatch= await userSchema.findOne({emailId: data.emailId, password: data.password})
    if(!loginMatch) return res.send({status: false, error: "Please enter correct id and password"})
    let token = jwt.sign({_id: loginMatch._id},'loginkey')
    res.send({status: true, token: token})
}   

const getUserDetails= async function(req,res){
    let id = req.params.userId
    let details= await userSchema.findById(id)
    res.send({status: true , data: details})
}

const updateUser= async function(req,res){
    let data= req.body
    let id = req.params.userId
    let update= await userSchema.findByIdAndUpdate(
        id,
        {$set: data},
        {new: true}
    )
    res.send({status: true, msg: update})
}

const deleteUser= async function(req,res){
    let id = req.params.userId
    let update= await userSchema.findByIdAndUpdate(
        id,
        {$set: {isDeleted: true}},
        {new: true}
    )
    res.send({status: true, msg: update})
}

module.exports.registerUser=registerUser
module.exports.loginUser= loginUser
module.exports.getUserDetails= getUserDetails
module.exports.updateUser= updateUser
module.exports.deleteUser=deleteUser