import User from "../models/user.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
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
