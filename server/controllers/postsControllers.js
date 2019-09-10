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

// Get posts by range
exports.getPostsByRange = async function (req, res) {

  try {
    let { startAt, limit } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);

    const posts = await Post.find().skip(startAt).limit(limit);
    const amount = await Post.countDocuments();

    res.status(200).json({
      posts,
      amount,
    });

  } catch(err) {
    res.status(500).json(err);
  }

};

exports.getRandomPost = async (req, res) => {
   
  try {
    let { id } = req.params;
    let posts = await Post.find();
    randomPost = posts[id];

    res.status(200).json(randomPost);

  } catch(err) {
    res.status(500).json(err);
  }
};