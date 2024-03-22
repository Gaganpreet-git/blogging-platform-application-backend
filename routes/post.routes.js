const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");
const commentController = require("../controllers/comment.controller");
const authenticateToken = require("../middleware/authenticateToken.middleware");

// Route to add a new post.
router.post("/", authenticateToken, postController.addNewPost);

// Route to fetch all posts.
router.get("/", postController.getAllPosts);

// Route to fetch all posts of a author.

router.get("/:authorId", postController.getAllPostsByAuthorId);

// Route to update a post
router.put("/:postId", authenticateToken, postController.updatePost);

// Route to delete a post
router.delete("/:postId", authenticateToken, postController.deletePost);

// Route to add a new comment to the post
router.post(
  "/:postId/comments",
  authenticateToken,
  commentController.addNewComment
);

// Route to get all comments on a post
router.get(
  "/:postId/comments",
  authenticateToken,
  commentController.getAllComments
);

module.exports = router;
