const express = require('express')
const router = express.Router()
const authorController = require('../controller/authorController')
const blogController = require('../controller/blogController')
const middleware= require('../middleware/middleware')

router.post("/authors", authorController.createAuthor)

router.post("/blogs",middleware.authentication, blogController.createblog)

router.post("/login",authorController.loginAuthor)

router.get("/blogs",middleware.authentication, blogController.getBlog)

router.put("/blogs/:blogId",middleware.authentication,middleware.authorisationById,blogController.updateBlog)

router.delete("/blogs/:blogId",middleware.authentication,middleware.authorisationById,blogController.deletebyId)

router.delete("/blogs",middleware.authentication,middleware.authorisationToQuery, blogController.deleteBlog)

module.exports = router