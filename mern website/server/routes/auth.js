const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const {JWT_SECRET} = require("../keys")

router.get("/", (req, res) => {
  res.send("we are in server router");
});

// using promises
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(422).json({ error: "please add all the field" });
  }
  User.findOne({ email: email }).then((userExist) => {
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    }
    bcrypt
      .hash(password, 12)
      .then((hashedpassword) => {
        const user = new User({
          email,
          password: hashedpassword,
          name,
        });
        user
          .save()
          .then((user) => {
            res.status(201).json({ message: "successfully signup" });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

//async-await
// router.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   if (!name || !email || !password) {
//     return res.status(422).json({ error: "please add all the field" });
//   }
//   try {
//     const userExist = await User.findOne({ email: email });
//     if (userExist) {
//       return res.status(422).json({ error: "Email already exist" });
//     }

//     const user = new User({ name, email, password });

//     const userRegister = await user.save();
//     if (userRegister) {
//       return res.status(201).json({ message: "user register succesfully" });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

//sign in router
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "please add all the fields" });
    }

    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(400).json({ error: "invalid email or password" });
      } else {
        res.json({ message: "successfully signin" });
      }
    } else {
      res.status(400).json({ error: "invalid email or password" });
    }

    //  if (userLogin) {
    //    return res.status(400).json({ error: "invalid email and password" });
    //  }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
