const express = require('express');

const postControllers = require('../controllers/postsControllers');

//ROUTER module
const router = express.Router();

// first "/" is "api/"

//get all posts
router.get('/posts', postControllers.getPosts );
//get single post
router.get('/posts/:id', postControllers.getSinglePost);
//add post
router.post('/posts', postControllers.addPost );
//update post
router.patch('/posts/:id', postControllers.updatePost);

module.exports = router;