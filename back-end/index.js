const express = require("express");
const cors = require("cors");
const connectDb = require("./utlis/db");
const User = require("./utlis/User");

const app = express();

app.use(express.json());
app.use(cors);

const PORT = 5000;

app.post("/register", async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
});

connectDb();

app.listen(PORT, () => {
  console.log("Listening on port 5000");
});
