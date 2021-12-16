const Post = require("../model/post");
exports.createPost = async (req, res, next) => {
  try {
    const post = new Post(req.body);
    const newPost = await post.save();
    return res.json(newPost);
  } catch (err) {
    return res.status(400).json({ error: "Failed To Create Post" });
  }
};

exports.getAllPost = async (req, res, next) => {
  try {
    const post = await Post.find({});
    return res.json(post);
  } catch (err) {
    return res.status(400).json({ error: "Failed to get All Post" });
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    req.post = post;
    return res.json(post);
  } catch (err) {
    return res.json({ error: "Oops something went wrong" });
  }
};

exports.getAllPostOfSingleUser = async (req, res, next) => {
  try {
    const { author } = req.params;
    const post = await Post.find({ author });
    return res.json(post);
  } catch (err) {
    return res.json({ error: "Fail to get All Post of this user" });
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const oldPost = await Post.findById(postId);
    oldPost.description = req.body.description || oldPost.description;
    oldPost.title = req.body.title || oldPost.title;
    await oldPost.save();
    return res.json(oldPost);
  } catch (err) {
    return res.status(400).json({ error: "Failed to Update this post" });
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const post = await Post.deleteOne({ _id: postId });
    return res.json(post);
  } catch (err) {
    return res.status(400).json({ error: "Not able to delete" });
  }
};
