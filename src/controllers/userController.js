const userSchema = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { sensitiveHeaders } = require('http2')

const registerUser = async function (req, res) {
    try {
        let data = await userSchema.create(req.body)
        res.status(201).send({ data: data })
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}

const loginUser = async function (req, res) {
    try {
        let data = req.body
        let loginMatch = await userSchema.findOne({ emailId: data.emailId, password: data.password, isDeleted: false })
        if (!loginMatch) return res.status(401).send({ status: false, error: "Please enter correct id and password" })
        let token = jwt.sign({ _id: loginMatch._id }, 'loginkey')
        res.status(200).send({ status: true, token: token })
    }
    catch (error) {
        res.status(401).send({ status: false, error: error.message })
    }
}

const getUserDetails = async function (req, res) {
    let id = req.params.userId
    let details = await userSchema.findOne({ _id: id, isDeleted: false })
    res.status(200).send({ status: true, data: details })
}

const updateUser = async function (req, res) {
    let data = req.body
    let id = req.params.userId
    let update = await userSchema.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true }
    )
    res.status(201).send({ status: true, msg: update })
}

const deleteUser = async function (req, res) {
    let id = req.params.userId
    let update = await userSchema.findByIdAndUpdate(
        id,
        { $set: { isDeleted: true } },
        { new: true }
    )
    res.status(200).send({ status: true, msg: update })
}

module.exports.registerUser = registerUser
module.exports.loginUser = loginUser
module.exports.getUserDetails = getUserDetails
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser