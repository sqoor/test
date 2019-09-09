const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const PostsSchema = new mongoose.Schema({
  title: String,
  text: String,
  code: String,
  userId: ObjectId
});

const Posts = new mongoose.model("posts", PostsSchema);

const getAll = async () => {
  const posts = await Posts.find({});
  return posts;
};

const getOne = async (_id) => {
  const post = await Posts.find({_id});
  return post;
};

const getByUserId = async (userId) => {
  const posts = await Posts.find({userId});
  return posts;
};


const add = async (newPost) => {
  const result = await Posts.create(newPost);
  return result;
};

const update = async (_id, updatedPost) => {
  const result = await Posts.updateOne({ _id }, { $set: { status: updatedPost } });
  
  return result;
};

const deleteOne = async (_id) => {
  const result = await Posts.deleteOne({ _id });

  return result;
};

module.exports = {
  getAll,
  add,
  update,
  deleteOne,
  getOne,
  getByUserId
};
