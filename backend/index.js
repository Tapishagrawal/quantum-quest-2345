const express = require("express");
const { connection } = require("./db");


const { userRouter } = require("./routes/user.routes");
const { gameRouter } = require("./routes/game.routes");


require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/games",gameRouter)


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

