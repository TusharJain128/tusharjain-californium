const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.post('/addproduct', UserController.addProduct)
router.post('/adduser',commonMW.middlewares, UserController.addUser)
router.post('/orderpurchase', commonMW.middlewares, UserController.orderPurchase)

module.exports = router;