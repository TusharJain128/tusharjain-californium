const jwt= require('jsonwebtoken')

const middleware= function(req,res,next){
    let token= req.headers['x-auth-token']
    let id = req.params.userId
    let decodeToken= jwt.verify(token, 'loginkey')
    if(decodeToken._id != id) res.send({status: false, error: 'You are not authorized'})
    next()
}

module.exports.middleware= middleware