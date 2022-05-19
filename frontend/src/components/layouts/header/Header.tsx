import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.css";

const Header: React.FC<any> = () => {
  const location = useLocation();

  return (
    <header className="container">
      <div>
        <Link to={"/"}>Indora</Link>
        {location.pathname.startsWith("/signin") ? (
          <></>
        ) : (
          <Link to={"/signin"}>SignIn / SignUp</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
