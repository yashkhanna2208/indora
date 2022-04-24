import User from "../models/user.js";

const register = (req, res, next) => {
  res.send("Register");
};

const login = (req, res, next) => {
  res.send("Login");
};

const forgotpassword = (req, res, next) => {
  res.send("Forgot Password Route");
};

const resetPassword = (req, res, next) => {
  res.send("Reset Password");
};

export { resetPassword, forgotpassword, login, register };
