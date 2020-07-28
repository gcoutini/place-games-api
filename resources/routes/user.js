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
  console.log("Postou!");
})

router.post(
  "/login",
  [
    check("password", "Senha invalida (min 6)").isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors
      });
    }

    const {
      username,
      password
    } = req.body;
    try {
      let user = await User.findOne({
        username
      });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({
          message: "Login/Password not correct!"
        });

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "randomString", {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: "Server Error"
      });
    }
  }
);

module.exports = router;