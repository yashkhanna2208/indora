import express from "express";
const auth = express.Router();

import {
  register,
  login,
  forgotpassword,
  resetPassword,
} from "../controllers/auth.js";

auth.route("/register").post(register);

auth.route("/login").post(login);

auth.route("/forgotpassword").post(forgotpassword);

auth.route("/resetpassword").post(resetPassword);

export default auth;
