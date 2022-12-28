const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware= require('../middleware/middleware')

router.post('/createUser',userController.registerUser)
router.post('/loginUser',userController.loginUser)
router.get('/userDetails/:userId',middleware.tokenCheck,userController.getUserDetails)
router.put('/updateUser/:userId',middleware.tokenCheck,userController.updateUser)
router.delete('/deleteUser/:userId',middleware.tokenCheck,userController.deleteUser)

module.exports = router;