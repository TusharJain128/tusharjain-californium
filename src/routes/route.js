const express = require('express');
const router = express.Router();
const userController= require('../controllers/userController')

router.get('/customerList',userController.customerList)
router.delete('/customerDelete',userController.customerDelete)
router.post('/newCustomer',userController.newCustomer)

router.get('/cardList',userController.cardList)
router.post('/newCard', userController.newCard)
module.exports = router;