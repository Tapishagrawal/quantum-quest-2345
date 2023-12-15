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

//Logout ////
userRouter.post("/logout", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    // Check if the token is present in the Authorization header
    if (typeof token === "undefined") {
      return res.status(400).json({
        status: "fail",
        message: "Missing token in the Authorization header",
      });
    }

    let newToken = new BlackListModel({ token });
    await newToken.save();
    res
      .status(200)
      .json({ status: "success", message: "User has been logged out" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ status: "fail", error: err.message });
  }
});

module.exports = {
  userRouter
};
