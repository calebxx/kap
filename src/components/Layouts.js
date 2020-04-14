import React from "react";
import "./Layouts.scss";
import Header from "./Header";
import Menu from "./Header/Menu";

function Layouts(props) {
  return (
    <>
      <Header>
        <Menu />
      </Header>

      <main className="container grid-lg">{props.children}</main>
    </>
  );
}

export default Layouts;
