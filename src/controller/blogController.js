const BlogModel = require("../model/blogModel")
const AuthorModel = require("../model/authorModel")

const getBlog = async function(res,req){
    let data = req.query
    if(data.authorId){
        let validAuthor= await AuthorModel.findById(data.authorId)
        if(!validAuthor){
            res.send({status: false, Error:'Invalid author Id'})
        }
    }

    if()
    

    let savedData = await BlogModel.find(data,{isDeleted: false },{isPublished: true}).populate('authorId')

    if(!savedData){
        return res.status(404).send({status: false, Error:'No Document Found'})
    }

    res.status(200).send({status: true , Msg: savedData})
}

module.exports.getBlog=getBlog