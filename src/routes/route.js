const express = require('express');
const router = express.Router();
const userController= require('../controllers/userController')

router.post('/createBook', userController.createBook)

router.get('/bookList', userController.bookList)

router.post('/getBooksInYear',userController.booksINYear)

router.post('/getParticularBooks', userController.particularBooks)

router.get('/getXINRBooks', userController.priceTag)

router.get('/getRandomBooks', userController.randomBooks)

module.exports = router;