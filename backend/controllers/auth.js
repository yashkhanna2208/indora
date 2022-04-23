exports.register = (res, req, next) => {
  res.send("Register");
};

exports.login = (res, req, next) => {
  res.send("Login");
};

exports.forgotpassword = (res, req, next) => {
  res.send("Forgot Password Route");
};

exports.resetPassword = (res, req, next) => {
  res.send("Reset Password");
};
