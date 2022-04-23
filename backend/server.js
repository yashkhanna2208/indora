import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ProductRouter from "./routes/productRoutes.js";
import seedRouter from "./routes/seedRouter.js";
import auth from "./routes/auth.js";

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

app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/products", ProductRouter);
app.use("/api/seed", seedRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running at " + port);
});
