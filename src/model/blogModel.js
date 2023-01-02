const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const blogModel = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    authorId: {
        type: ObjectId,
        ref: authorModel,
        required: true
    },
    tags: [String],
    category: {
        type: String,
        required: true
    },
    subcategory: [String],
    deletedAt: Date.now(),
    isDeleted: {
        type: Boolean,
        default: false
    },
    publishedAt: Date.now(),
    isPublished: {
        type: Boolean,
        default: false
    }
}, { timestamp: true })

module.exports = mongoose.model("blogModel", blogModel) 