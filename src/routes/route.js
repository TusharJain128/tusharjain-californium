const express = require('express');
const router = express.Router();
const controller= require('../controllers/controller') 

router.get("/oneApi",controller.firstApi)
router.get("/secondApi",controller.secondApi)



module.exports = router;