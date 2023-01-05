const authorModel = require("../model/authorModel")
const jwt= require('jsonwebtoken')
const validator= require('../validator/validator')


const createAuthor = async function(req, res){
    try {
        let data = req.body;
        let email= req.body.email
        let isEmailValid= validator.isEmail(email)
        if(!isEmailValid) return res.send({status: false, error: "Please enter valid email"})
        let savedData = await authorModel.create(data);
        res.status(201).send({ status: true, data: savedData });
    
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
}

const loginAuthor = async function(req,res){
  try{
    let data = req.body
    let {email,password} = data

    let savedData = await authorModel.findOne({email:email,password:password})
    if(!savedData) return res.status(400).send({status:false, Error: "details not match"})

    let token = jwt.sign({_id:savedData._id},'laptop')
    res.setHeader("x-api-key",token)
    res.status(200).send({status:true, Msg:token})

  }catch(error){
    res.status(500).send({status:false, Error: error.message})
  }
}



module.exports.loginAuthor= loginAuthor
module.exports.createAuthor = createAuthor
