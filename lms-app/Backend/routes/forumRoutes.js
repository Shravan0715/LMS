const express = require("express");
const { createForumPost, getAllForumPosts } = require("../controllers/forumController");

const router = express.Router();

router.post("/", createForumPost);
router.get("/", getAllForumPosts);

module.exports = router;
