const mongoose = require("mongoose");

// illustration example
// delete all code below and rewrite as our application NEEDED;

const postsSchema = new mongoose.Schema({
  title: String,
  language: String,
  status: Boolean
});

let Posts = new mongoose.model("posts", postsSchema);

let getAll = cb => {
  Posts.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let add = (repo, cb) => {
  Posts.create(repo, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let update = (id, updatedStatus, cb) => {
  Posts.updateOne(
    { _id: id },
    { $set: { status: updatedStatus } },
    (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(data);
      }
    }
  );
};

let deleteOne = (id, cb) => {
  Posts.deleteOne({ _id: id }, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

module.exports = {
  getAll,
  add,
  update,
  deleteOne
};
