const express = require("express");
const bcrypt = require("bcrypt");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(200).send({ error: err });
      } else {
        const user = new UserModel({ username, email, password: hash });
        await user.save();
        res.status(200).send({ msg: "A new user has been registered" });
      }
    });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        const token = jwt.sign(
          { userID: user._id, username: user.username },
          "masai"
        );
        res.status(200).send({ msg: "Login Successful", token: token });
      } else {
        res.status(200).send({ msg: "Wrong Credentials" });
      }
    });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});



module.exports = {
  userRouter
};
