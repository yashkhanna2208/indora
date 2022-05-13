import React from "react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC<any> = () => {
  const location = useLocation();

  if (location.pathname.startsWith("/signIn")) {
    return <></>;
  } else {
    return (
      <header>
        <Link to={"/"}>indora</Link>
      </header>
    );
  }
};

export default Header;
