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

const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send(400).json({
      success: false,
      error: "Please provide email and password",
    });
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.send(404).json({ success: false, error: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      res.send(404).json({ success: false, error: "Invalid credentials" });
    }

    res.send({
      success: true,
      token: "test",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const forgotpassword = (req, res, next) => {
  res.send("Forgot Password Route");
};

const resetPassword = (req, res, next) => {
  res.send("Reset Password");
};

export { resetPassword, forgotpassword, login, register };
