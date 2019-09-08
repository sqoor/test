const mongoose = require("mongoose");

// all code here is an illustration example of what you need to do
// change the code correspondingly with what we want to do.
// change all code here, we need different schema for the Users

const adminsSchema = new mongoose.Schema({
  username: String,
  password: String
});

let Admins = new mongoose.model("admins", adminsSchema);

let getAll = cb => {
  Admins.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

module.exports = {
  getAll
};
