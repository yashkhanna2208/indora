import express from "express";
import Product from "../models/productModels.js";

const ProductRouter = express.Router();

ProductRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

export default ProductRouter;
