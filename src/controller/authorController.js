const authorModel = require("../model/authorModel")

let validator = require("validator");

let jwt = require("jsonwebtoken");

const { isValid } = require("../validator/validations")



//----------------------CREATE_AUTHOR----------------------------

const createAuthor = async function(req, res){
    try {
        let data = req.body;
        let { email, fname, title, lname, password } = data;
    
        //if input is empty || required fields are missing
        if (Object.keys(data).length == 0)
          return res.status(400).send({ status: false, msg: " input object can not be empty" });
    
        if (!isValid(email)) {
          return res.status(400).send({ status: false, msg: " email is required" });
        }
        if (!isValid(fname)) {
          return res.status(400).send({ status: false, msg: " fname is required" });
        }
        if (!isValid(lname)) {
          return res.status(400).send({ status: false, msg: " lname is required" });
        }
        if (!isValid(title)) {
          return res.status(400).send({ status: false, msg: " title is required" });
        }
        if (!isValid(password)) {
          return res.status(400).send({ status: false, msg: " password is required" });
        }
    
        // email validation
        if (!validator.isEmail(email.trim())) return res.status(400).send({ status: false, msg: "You have entered an invalid email address!" });
    
        // name alphabetic  validation 
        let LnameValidate = validator.isAlpha(data.lname);
        let FnameValidate = validator.isAlpha(data.fname);
    
        if (LnameValidate == false || FnameValidate == false)
          return res.status(400).send({ status: false, msg: "LastName and firstName must be between A-z or a-z ", });
    
        // used map to reduce time complexity
        let map = { "Mr": 1, "Mrs": 1, "Miss": 1 }
        if (map[title.trim()] === undefined) {
          return res.status(400).send({ status: false, msg: "title must be  Mr,Mrs or Miss" });
        }
        // if (!["Mr", "Mrs", "Miss"].includes(data.title.trim()))
        //   return res.status(400).send({ status: false, msg: "title must be  Mr,Mrs or Miss" });
    
        let checkAuthor = await authorModel.findOne({ email: email });
        if (checkAuthor) return res.status(400).send({ status: false, msg: "this email is already in use" });
    
        let savedData = await authorModel.create(data);
        res.status(201).send({ status: true, data: savedData });
    
      } catch (error) {
        res.status(500).send({ msg: error.message });
      }
};

module.exports.createAuthor = createAuthor
