import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to db");
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default connectDB;
