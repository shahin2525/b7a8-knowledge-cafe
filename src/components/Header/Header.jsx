import React from "react";
import "./Header.css";
import profile from "../../images/header.jpg";
const Header = () => {
  return (
    <div className="header">
      <h3>Knowledge Cafe</h3>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
