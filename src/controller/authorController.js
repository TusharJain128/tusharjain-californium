const authorModel = require("../model/authorModel")
const jwt= require('jsonwebtoken')
const validator= require('../validator/validator')


const createAuthor = async function(req, res){
    try {
        let data = req.body;
        let email= req.body.email
        if(!email)return res.status(400).send({status:false,error:"email is required"})
        let isEmailValid= validator.isEmail(email)
        if(!isEmailValid) return res.status(400).send({status: false, error: "Please enter valid email"})
        let duplicateEmail= await authorModel.findOne({email: email})
        if(duplicateEmail)return res.status(400).send({status:false,error:"email is already exist"})
        let savedData = await authorModel.create(data);
        res.status(201).send({ status: true, data: savedData });
    
      } catch (error) {
        console.log(error);
        res.status(500).send({status:false, error: error.message});
      }
}

const loginAuthor = async function(req,res){
  try{
    let data = req.body
    let {email,password} = data

    let savedData = await authorModel.findOne({email:email,password:password})
    if(!savedData) return res.status(400).send({status:false, error: "details not match"})

    let token = jwt.sign({_id:savedData._id},'laptop')
    res.setHeader("x-api-key",token)
    res.status(200).send({status:true, msg:token})

  }catch(error){
    res.status(500).send({status:false, error: error.message})
  }
}



module.exports.loginAuthor= loginAuthor
module.exports.createAuthor = createAuthor
