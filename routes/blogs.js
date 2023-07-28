const express = require("express");
const router = express.Router();
blogController = require ('./users/controller/blogsController')
const Blog = require('./users/model/Blog');


const {getAllBlogs, createBlog, getOneBlogById, updateOneBlogById, deleteOneBlogById} = require("./users/controller/blogsController")
//require("../controllers/blogsController");

//callback function
router.get("/", (req, res) => {
    //res.send response with a string
    res.send("hello from blogs");
});

//MVC: Model, Controller, View (models, views, controllers folders)
// View: React Application
// Model: make a models folder, and Blog.js in it. 
//router.get("/function", function(req, res){

//})
//router.post()
//router.delete()
//callbacks  are used inside as an argument
//all routes coming in from the regular browser url are get routes.
router.get("/all-blogs", getAllBlogs);
router.post("/create-blog", createBlog);
router.get("/get-one-blog/:id", getOneBlogById);
// router.get('/:id', blogController.getBlogById);
router.put("/update-by-id/:idToUpdate", updateOneBlogById);
router.delete("/delete-by-id/:idToDelete", deleteOneBlogById)

module.exports = router;