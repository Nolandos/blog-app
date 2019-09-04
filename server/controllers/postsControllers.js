const Post = require('../models/postsModel');

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

