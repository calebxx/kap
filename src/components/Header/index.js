import React from "react";
import "./index.scss";

const Header = (props) => {
  return (
    <header className="header">
      <nav className="container grid-lg">{props.children}</nav>
    </header>
  );
};

export default Header;
