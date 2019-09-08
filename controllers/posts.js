const posts = require("../models/posts");
const express = require("express");
const router = express.Router();

// illustration example,
// delete all routes (API endpoints) here and build the one we needs at our project

/*
example of request URL
GET     http://localhost:9000/posts
POST    http://localhost:9000/posts   {body of requet}
DELETE  http://localhost:9000/posts/5d619454a6b4a51ae0cb33de
PUT     http://localhost:9000/repos/5d61937e0d47773150aa8e3c
*/

// delete here and rebuild the routes as we needed ____________________________________________

router.get("/", (req, res) => {
  posts.getAll(result => {
    res.send(result);
  });
});

/*

Example:
async await approach

router.get("/", async (req, res) => {
  const result = await posts.getRepos();
  res.send(result);
}); 

*/

router.post("/", (req, res) => {
  const newPost = req.body;
  posts.add(newPost, result => {
    res.send(result);
  });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updatedStatus = req.body;
  posts.update(id, updatedStatus, result => {
    res.send(result);
  });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  posts.deleteOne(id, result => {
    res.send(result);
  });
});

/// ______________________________________________

module.exports = router;
