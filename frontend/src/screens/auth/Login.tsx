import React from "react";
import "./login.css";

const Login: React.FC<any> = () => {
  return (
    <section className="login-section">
      <h3>SignIn</h3>
      <form className="form-horizontal">
        <input
          type="text"
          name="username"
          autoFocus={true}
          placeholder="Username"
          autoCapitalize={"false"}
        />
        <input type="password" name="password" placeholder="Password" />
        <input type="sumbit" value="Login" />
      </form>

      <p>
        Forgot your password? <a href="#">Reset password</a>
      </p>

      <p className="button-text">
        Don't have an accout? <a href="#">Sign up</a>
      </p>
    </section>
  );
};

export default Login;
