import React from "react";
import "./Number.scss";

const Number = (props) => {
  return (
    <div
      className="zd-data-circle"
      style={{
        background: `conic-gradient(var(--${props.color || "blue"}) ${
          props.percent || 0
        }%, var(--gray) 0)`,
      }}
    >
      <div className="zd-data-circle-inner">
        <div className="zd-data-number">
          {props.number}
          <span className="zd-data-suffix">{props.suffix}</span>
        </div>
        <div className="zd-data-title">{props.title}</div>
      </div>
    </div>
  );
};

export default Number;
