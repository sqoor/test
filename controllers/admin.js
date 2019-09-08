const admin = require("../models/admins");
const express = require("express");
const router = express.Router();

// Illustration Example:
// NOTE: use router object instead of app object here
/*
// callback approach
router.get("/", (req, res) => {
  mongo.getRepos(result => {
    res.send(result);
  });
});


// async await approach
router.get("/", async (req, res) => {
  const result = await mongo.getRepos();
  res.json(result);
});

*/

// write you routes (server API) here

const usersInDb = [
  {
    email: 'a@g.com',
    password: 123
  }
]



router.post('/login', (req, res) => {
  const userToCheck = req.body
  const result = usersInDb.reduce((result, elem) => {
    if(elem.email === userToCheck.email && elem.password === +userToCheck.password)
      return true;
    return false;
  }, false)

  res.send(result);
})

module.exports = router;
