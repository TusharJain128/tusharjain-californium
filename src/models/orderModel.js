const mongoose= require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId

const orderSchema= new mongoose.Schema({
    "userId":{
        type: ObjectId,
        ref: "userNew",
        required: true
    },
    "productId":{
        type: ObjectId,
        ref: "productNew",
        required: true
    },
    "amount": Number,
    "isFreeAppUser": String,
    "date": String
})

module.exports= mongoose.model("orderNew", orderSchema)