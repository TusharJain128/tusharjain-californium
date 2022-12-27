const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

router.post('/createUser',userController.registerUser)
router.post('/loginUser',userController.loginUser)
router.get('/userDetails/:userId',userController.getUserDetails)
router.put('/updateUser/:userId',userController.updateUser)
router.delete('/deleteUser/:userId',userController.deleteUser)

module.exports = router;