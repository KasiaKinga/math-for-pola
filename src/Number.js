import React from "react";
import "./Number.css";

const Number = (props) => {
  return (
    <div className="Number-element">
      <button style={{ background: props.color }} onClick={props.onClick}>
        {props.number}
      </button>
    </div>
  );
};

export default Number;
