import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC<any> = () => {
  return (
    <header>
      <Link to={"/"}>indora</Link>
    </header>
  );
};

export default Header;
