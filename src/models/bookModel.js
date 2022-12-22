const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    authorId: {
        type: ObjectId,
        ref: "NewAuthor",
        required: true
    }, 
    price: Number,
    rating: Number,
    publisher: {
        type: ObjectId,
        ref: "NewPublisher",
        required:true
    },
    isHardCover:{
        type: Boolean,
        default: false
    }


}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema)
