const Post = require('../models/postsModel');
const uuid = require('uuid');

exports.getPosts = async (req, res) => {

    try {
      res.status(200).json(await Post.find());
    } catch(err) {
      res.status(500).json(err);
    }

};

exports.getSinglePost = async (req, res) => {  

  try {
      res.status(200).json(await Post.findOne({id: req.params.id}));
  } catch (err) {
      res.status(500).res.json(err);
  }

};

exports.addPost = async function (req, res) {
  try {

    let newPost = new Post(req.body); 
    newPost.id = uuid(); //create id for post

    res.status(200).json(await newPost.save());

  } catch(err) {
    res.status(500).json(err);
  }

}

exports.updatePost = async function (req, res) {
  try {
    const updatePost = await Post.updateOne(
      { id: req.params.id },
      { $set: 
        {
          title: req.body.title,
          author: req.body.author,
          content: req.body.content
        }
      }, { runValidators: true } 
    );
    res.status(200).json(updatePost);

  } catch(err) {
    res.status(500).json(err);
  }

}
