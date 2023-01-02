const { default: mongoose } = require("mongoose");
const authorModel = require("../Models/AuthorModel");
const blogModel = require("../Models/BlogModel");
const { isValid } = require("../validator/validations")

const createBlog = async function (req, res) {
    try {
      let data = req.body;
      let Id = data.authorId;
  
  
      // for required fields
      if (Object.keys(data).length == 0)return res.status(400).send({ status: false, msg: "Object can not be empty" });
  
      if (Id.length != 24) {return res.status(400).send({ status: false, msg: "invalid authorId" })}
  
      let authId = await authorModel.findById(Id);
      if (!authId) {return res.status(404).send({ status: false, msg: "Author does not exist" })}
  
      if(!isValid(data.title))return res.status(400).send({status: false,msg: "title is required"})
      if(!isValid(data.body))return res.status(400).send({status: false,msg: "body is required "})
      if(!isValid(data.category))return res.status(400).send({status: false,msg: "category is required"})
     
  
      if (data.isPublished) {
        let date = new Date();
        data["publishedAt"] = date;
      }
  
      {
        let savedData = await blogModel.create(data);
        return res.status(201).send({ status: true, data: savedData });
      }
    } catch (error) {
      return res.status(500).send({ status: false, msg: error.message });
    }
  };