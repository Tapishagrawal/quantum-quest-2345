const express = require("express");
const { connection } = require("./db");

const { userRouter } = require("./routes/user.routes");
const { gameRouter } = require("./routes/game.routes");
const { categoryRouter } = require("./routes/categoryy.routes");

require("dotenv").config();
const cors = require("cors");
const WishRouter = require("./routes/wishlist.routes");




const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/games",gameRouter)
app.use("/cates",categoryRouter)
app.use("/wishlist",WishRouter)


app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("database connected");
    console.log(`http://localhost:${process.env.port}`);
  } catch (error) {
    console.log("Error in connection the Database.");
    console.log(error);
  }
});

