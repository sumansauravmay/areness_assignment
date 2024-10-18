const express = require("express");

const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const payload = req.body;

  try {
    email = payload.email;
    let useremail = await UserModel.findOne({ email });
    if (useremail) {
      return res.status(401).send({ msg: "email already registered!" });
    }

    const user = new UserModel(payload);
    user.save();
    res.send({ msg: "User registered successfully!", user });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "Error" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    const isPassword = await UserModel.findOne({ password });
    if (!user) {
      return res.status(401).send({ msg: "Wrong username!" });
    }

    if (!isPassword) {
      return res.status(401).send({ msg2: "Wrong Password!" });
    }

    res.send({ msg: "Login Successful", username: user });
    console.log(user);
  } catch (err) {
    console.error(err);
    res.status(500).send({ msg: "Internal Server Error" });
  }
});

module.exports = { userRouter };
