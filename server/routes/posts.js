const express = require('express');

const postControllers = require('../controllers/postsControllers');

//ROUTER module
const router = express.Router();

// "/posts" is api/posts 
router.get('/posts', postControllers.getPosts );
router.get('/posts/:id', postControllers.getSinglePost);

module.exports = router;