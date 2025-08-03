const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    // author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // 🔥 this should match your User model name
      required: true,
    },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
