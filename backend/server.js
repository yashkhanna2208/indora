import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ProductRouter from "./routes/productRoutes.js";
import seedRouter from "./routes/seedRouter.js";
import auth from "./routes/auth.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/products", ProductRouter);
app.use("/api/seed", seedRouter);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log("server is running at " + port);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error : ${err}`);
  server.close(() => process.exit(1));
});
