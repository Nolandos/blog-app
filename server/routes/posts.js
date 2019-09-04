const express = require('express');

const postControllers = require('../controllers/postsControllers');

//ROUTER module
const router = express.Router();

// "/posts" is api/posts 
router.get('/posts', postControllers.getPosts );
  

module.exports = router;