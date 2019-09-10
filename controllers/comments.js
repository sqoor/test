const Comments = require("../models/comments");
const Users = require("../models/users");
const express = require("express");
const router = express.Router();


router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.getAll(postId);

  for (let i = 0; i < comments.length; i++) {
      const comment = comments[i];
      const user = (await Users.getOne(comment.userId))[0];
      // retiver the user information with comment
      console.log('U:',user)
      console.log('C:',comment);

      comment['text'] = user;

      console.log('C a:',comment);
  }
  
  res.send(comments);
});

router.post("/", async (req, res) => {
  const newComment = req.body;
  const addedComment = await Comments.add(newComment);

  res.send(addedComment);
});

router.put("/:commentId", async (req, res) => {
  const commentId = req.params.commentId;
  const updatedComment = req.body;
  const result = await Comments.update(commentId, updatedComment);

  res.send(result);
});

router.delete("/:commentId", async (req, res) => {
  const commentId = req.params.commentId;
  const result = await Comments.deleteOne(commentId);

  res.send(result);
});

module.exports = router;
