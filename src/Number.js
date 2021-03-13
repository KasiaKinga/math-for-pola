import React from "react";
import "./Number.css";

const Number = (props) => {
  return (
    <button className="Number-element" onClick={props.onClick}>
      {props.number}
    </button>
  );
};

export default Number;
