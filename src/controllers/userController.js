const { type } = require("express/lib/response")
const orderModel= require('../models/orderModel')
const productModel= require('../models/productModel')
const userModel= require('../models/userModel')


const addProduct= async function(req, res){
    let product= await productModel.create(req.body)
    res.send({msg: product})
}

const addUser= async function (req, res) {
    let data = req.body
    let userDetails= await userModel.create(data)
    res.send({msg: userDetails})
}

const orderPurchase= async function(req,res){
    let data= req.body
    let userID= await userModel.findOne({_id: data.userId})
    if(userID==null){
        res.send({error: 'Please enter correct user id'})
    }
    let productID= await productModel.findOne({_id: data.productId})
    if(productID==null){
        res.send({error: 'Please enter correct product id'})
    }
    if(data.isFreeAppUser=== false){

        let priceDeduct=await userModel.findOneAndUpdate(
            {_id: data.userId},
            {$inc: {balance: -(data.amount)}},
            {new: true}
        )
        console.log(priceDeduct)
    }
    let purchaseData= await orderModel.create(data)
    res.send({msg: purchaseData})
}




module.exports.addProduct= addProduct
module.exports.addUser= addUser
module.exports.orderPurchase= orderPurchase