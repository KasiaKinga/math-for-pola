import React from "react";
import Button from "@material-ui/core/Button";

import "./Number.css";

const Number = (props) => {
  const buttonSize = "2.2em";
  const buttonStyle = {
    ...{
      backgroundColor: "white",
      color: "#888888",
      boxShadow: "2px 3px #888888",
      border: "2px solid #888888",
      fontSize: "1.2em",
      maxWidth: buttonSize,
      maxHeight: buttonSize,
      minWidth: buttonSize,
      minHeight: buttonSize,
      cursor: "pointer",
    },
    ...{
      backgroundColor: props.color ? props.color : "white",
    },
  };

  return (
    <div className="Number-wrapper">
      <Button
        variant="contained"
        style={buttonStyle}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.number}
      </Button>
    </div>
  );
};

export default Number;
