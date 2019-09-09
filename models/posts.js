const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const PostsSchema = new mongoose.Schema({
  title: String,
  text: String,
  code: String,
  userId: ObjectId
});

let Posts = new mongoose.model("posts", PostsSchema);

let getAll = async () => {
  const posts = await Posts.find({});

  return posts;
};

let add = async (newPost) => {
  const result = await Posts.create(newPost);
  // you should return the id of the post to the user
  // the user will push this postId to posts array
  return result;
};

let update = async (_id, updatedPost) => {
  const result = await Posts.updateOne({ _id }, { $set: { status: updatedPost } });
  
  return result;
};

let deleteOne = async (_id) => {
  const result = await Posts.deleteOne({ _id });

  return result;
};

module.exports = {
  getAll,
  add,
  update,
  deleteOne
};
