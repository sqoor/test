const Users = require("../models/users");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const userToCheck = req.body;
  const user = await Users.auth(userToCheck);

  if(user.length) res.json(user);

  res.json('email or password do not match');
});

module.exports = router;
