import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to db");
  })
  .catch((error) => {
    console.log(error.message);
  });

const app = express();

app.get("/api/products", (req, res) => {
  res.send("products");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running at " + port);
});
