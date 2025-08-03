// const router = require("express").Router();
// const User = require("../models/User");

// router.get("/:id", async (req, res) => {
//   const user = await User.findById(req.params.id).select("-password");
//   res.json(user);
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const { getUserPosts } = require("../controllers/userController");

// GET /api/users/:id/posts
router.get("/:id/posts", getUserPosts);

module.exports = router;
