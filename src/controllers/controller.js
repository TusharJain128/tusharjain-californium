const { response } = require("express")

const firstApi= function(req,res){
    console.log('This is my first Api')
    res.send({msg: 'first api'})
}

const secondApi= function(req,res){
    console.log('This is my second Api')
    res.send({msg: 'second api'})
}

module.exports.firstApi= firstApi
module.exports.secondApi=secondApi