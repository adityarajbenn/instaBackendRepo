const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const userRouter = require("./userRoutes");
const postRouter = require("./postRoues");

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
