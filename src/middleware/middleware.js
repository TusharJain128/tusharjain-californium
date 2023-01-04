let jwt = require("jsonwebtoken");
const blogModel = require("../model/blogModel");
const authorModel = require('../model/authorModel')

let authentication = async function (req, res, next) {
    try {
      let token = req.headers["x-api-key"];
      if (!token)return res.status(400).send({status:false,error: "x-api-key header is required" });
  
      let isKeyTrue = jwt.verify(token, "laptop");
      if (!isKeyTrue) return res.status(400).send({status:false, error: "invalid key" });
      const existAuthor= await authorModel.findOne({_id:isKeyTrue._id, isDeleted: false})
      if(existAuthor==null) return res.status(401).send({status:false, error:"Author is not exist"})
      next();
    }
     catch (error) {
      return res.status(500).send({ status:false,message: error.message });
    }
  };

let authorisationById = async function (req, res, next) {
    try {
     
      let requestBlogId = req.params.blogId
      if(!blogId)return res.status(400).send({ status: false, msg: "please enter blogId"});
      let token = req.headers["x-api-key"];
      if (!token)return res.status(400).send({status:false,error: "x-api-key header is required" });
      const blogs= await blogModel.findOne({_id:requestBlogId, isDeleted:false})
      if(blogs== null) return res.status(404).send({status: false, error: "blog is not found"})
      let authorid= blogs.authorId._id
      let decode= jwt.verify(token, "laptop");
      if (!decode) return res.status(400).send({status:false, error: "invalid key" });
      if(authorid!=decode._id) return res.status(403).send({status: false, error: "You are not autherised"})  
      next();
    } 
    catch (error) {
      return res.status(500).send({status:false, error: error.message });
    }
  };
  
  
  
  let authorisationToQuery = async function (req, res, next) {
    try {
     
        let data = req.query
        if (Object.keys(data).length == 0) return res.status(404).send({ status: false, Error: "data is required" })    
        let token = req.headers["x-api-key"];
        if (!token)return res.status(400).send({status:false,error: "x-api-key header is required" });
        data.isDeleted= false
        const getBlog= await blogModel.findOne(data)
        if(getBlog==null) return res.status(404).send({status:false, error: "Blog is not found"})
        let authorid= getBlog.authorId._id
        let decode= jwt.verify(token, "laptop");
        if (!decode) return res.status(400).send({status:false, error: "invalid key" });
        if(authorid!=decode._id) return res.status(403).send({status: false, error: "You are not autherised"})  
        next();
    } 
    catch (error) {
      return res.status(500).send({status:false,message:error.message });
    }
  };
  
  
  module.exports.authentication = authentication
  module.exports.authorisationById = authorisationById;
  module.exports.authorisationToQuery = authorisationToQuery;




