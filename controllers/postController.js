const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const { content } = req.body;
  console.log("Logged-in user:", req.user); // 💥
  const userId = req.user.id;

  try {
    const newPost = await Post.create({ content, author: userId });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUserPosts = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.userId }).populate(
      "author",
      "name"
    );
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
