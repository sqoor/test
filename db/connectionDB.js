const mongoose = require("mongoose");


// mongodb://<dbuser>:<dbpassword>@ds217678.mlab.com:17678/oca-blog
module.exports = function() {
  mongoose.connect("mongodb://alsqoor:mlab120130123@ds217678.mlab.com:17678/oca-blog", { useNewUrlParser: true });
  const db = mongoose.connection;

  db.on("error", function() {
    console.log("mongoose connection error");
  });

  db.once("open", function() {
    console.log("mongoose connected successfully");
  });
};
