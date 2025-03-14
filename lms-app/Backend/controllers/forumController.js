const Forum = require("../models/ForumModel");

// Create a new forum post
const createForumPost = async (req, res) => {
  try {
    const { title, content, user } = req.body;
    const newPost = new Forum({ title, content, user });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all forum posts
const getAllForumPosts = async (req, res) => {
  try {
    const posts = await Forum.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createForumPost, getAllForumPosts };
