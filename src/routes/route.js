const express = require('express');
const router = express.Router();
const userController= require('../controllers/userController')

router.post('/createAuthorDetails', userController.createAuthorDetails)
router.post('/createBookDetails', userController.createBookDetails)

router.get('/chetanBhagat',userController.chetanBhagatBooks)
router.get('/updatePrice',userController.updateBookPrice)
router.get('/selectedBooks',userController.selectedBooks)

module.exports = router;