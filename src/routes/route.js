const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")

router.post('/createAuthor',authorController.createAuthor)
router.post('/createPublisher',authorController.createPublisher)
router.post('/createBook',authorController.createBook)
router.get('/getBooks',authorController.getBooks)

router.put('/updatePublish',authorController.updatePublish)
router.put('/updatePrice',authorController.updatePrice)

module.exports = router;