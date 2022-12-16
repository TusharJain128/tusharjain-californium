const express = require('express');
const router = express.Router();
const UserController= require('../controllers/userController')
const UserModel= require("../models/userModel.js")

router.post("/createData", UserController.createData  )

router.get("/getBooksData", UserController.getBooksData)


module.exports = router;