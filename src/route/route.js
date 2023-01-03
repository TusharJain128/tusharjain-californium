const express = require('express')
const router = express.Router()
const authorController = require('../controller/authorController')
const blogController = require('../controller/blogController')

router.post("/authors", authorController.createAuthor)

router.post("/blogs", blogController.createblog)

router.get("/blogs", blogController.getBlog)

router.put("/blogs/:blogId",blogController.updateBlog)

router.delete("/blogs/:blogsId",blogController.deletebyId)

router.delete("/blogs", blogController.deleteBlog)

module.exports = router