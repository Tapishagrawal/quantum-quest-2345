const express = require("express");
const bcrypt = require("bcrypt");
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if(checkPassword(password)){
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.status(200).send({ error: err });
        } else {
          const user = new UserModel({ username, email, password: hash });
          await user.save();
          res.status(200).send({ msg: "A new user has been registered" });
        }
      });
    }
  
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

function checkPassword(password) {
  let num = "0123456789";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let specialChar = "~!@#$%^&*()";

  let flag1 = false;
  let flag2 = false;
  let flag3 = false;
  let flag4 = false;

  if (password.length < 8) {
    return false;
  }

  for (let i=0;i<password.length;i++) {
   if(uppercase.includes(password[i])){
    flag1 = true;
   }

   if(num.includes(password[i])){
    flag2 = true;
   }

   if(lowercase.includes(password[i])){
    flag3 = true;
   }

   if(specialChar.includes(password[i])){
    flag4 = true;
   }
  }

  return flag1 && flag2 && flag3 && flag4 ? true : false ;

}

module.exports = {
  userRouter
};
