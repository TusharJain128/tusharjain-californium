const authorModel = require("../model/authorModel")


const createAuthor = async function(req, res){
    try {
        let data = req.body;
        let savedData = await authorModel.create(data);
        res.status(201).send({ status: true, data: savedData });
    
      } catch (error) {
        res.status(500).send({ msg: error.message });
      }
}

module.exports.createAuthor = createAuthor
