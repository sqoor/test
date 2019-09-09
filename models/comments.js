const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId;

const CommentsSchema = new mongoose.Schema({
  postId: ObjectId,
  userId: ObjectId,
  text: String
});

const Comments = new mongoose.model("comments", CommentsSchema);

const getAll = async (postId) => {
    return await Comments.find({ postId });
}

const add = async (newComment) => {
    return await Comments.create(newComment);
}

const update = async (_id, updatedComment) => {
    return await Comments.create({_id}, updatedComment);
}

const remove = async (_id) => {
    return await Comments.create({_id});
}

module.exports = {
    getAll,
    add,
    update,
    remove
}