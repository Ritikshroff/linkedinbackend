const User = require("../models/User");
const Post = require("../models/Post");

const getUserPosts = async (req, res) => {
  try {
    const userId = req.params.id;

    // Fetch user profile
    const user = await User.findById(userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    // Fetch user's posts
    const posts = await Post.find({ author: userId }).sort({ createdAt: -1 });

    res.status(200).json({
      user,
      posts,
    });
  } catch (err) {
    console.error("Error fetching user posts:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getUserPosts };
