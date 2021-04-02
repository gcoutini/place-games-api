const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");

const authConfig = require('../../config/auth.json');

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

  if(!user) return res.sendStatus(404);

  bcrypt.compare(password, user.password, async (err, result) => {
    if(err) return res.sendStatus(401);
    const token = jwt.sign({ id: user._id }, authConfig.secret, {
      expiresIn: 86400,
    });
    return res.status(result ? 200 : 401).json({ user, token });
  });
});

module.exports = router;