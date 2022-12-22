const mongoose= require('mongoose')

const customerSchema= new mongoose.Schema({
    'firstName': String,
    'lastName': String,
    'mobileNumber': {
        type: String,
        length: 10
    },
    'DOB': Date,
    'emailID': String,
    'address': String,
    'customerID': String,
    'status': {
        type: String,
        enum: ['ACTIVE','INACTIVE']
    },
    'isDeleted': {
        type: Boolean,
        default: false
    }
},{timestamps: true})

module.exports= mongoose.model('customer',customerSchema)
