import mongoose from "mongoose";
import brypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await brypt.getSalt(10);
  this.password = await brypt.hash(this.password, salt);
  next();
});

userSchema.method.matchPassword = async function (password) {
  return await brypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
