const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  check,
  validationResult
} = require("express-validator/check");
const router = express.Router();

const User = require("../models/User");

router.post("/signup", function (req, res) {
  const { login, password } = req.body;
  let user = new User({ login, password })

  bcrypt.hash(password, 10, async function(err, hash) {
    if(err) return res.send(err);
    user.password = hash;

    await user.save();
    res.send(user);
  })
})

router.post("/login", async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ login });

  if(!user) return res.send(404);

  bcrypt.compare(password, user.password, async (err, result) => {
    if(err) return res.send(401);
    return res.send(result ? 200 : 401);
  });
});

module.exports = router;