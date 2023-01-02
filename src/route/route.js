const BlogController = require("../controller/blogController")
const AuthorController = require("../controller/authorController")


route.get("/blogs",BlogController.getBlog)