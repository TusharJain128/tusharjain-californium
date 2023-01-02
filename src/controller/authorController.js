const authorModel = require("../model/authorModel")



//----------------------CREATE_AUTHOR----------------------------

const createAuthor = async function(req, res){
   let data = req.body
    let Author = await authorModel.create(data)
    res.send({data: Author})
}

module.exports.createAuthor = createAuthor
