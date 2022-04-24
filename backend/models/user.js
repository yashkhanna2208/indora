import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please Provide Email"],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    password: {
      required: true,
      type: String,
      minlength: 8,
      select: false,
    },
    resetPasswordTokken: String,
    resetPasswordExpireDate: Date,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
