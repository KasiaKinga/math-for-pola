import React from "react";
import Button from "@material-ui/core/Button";

import "./Number.css";

const Number = (props) => {
  const buttonStyle = {
    ...{
      backgroundColor: "white",
      color: "#888888",
      boxShadow: "2px 3px #888888",
      border: "2px solid #888888",
      fontSize: "1.2em",
      maxWidth: "2em",
      maxHeight: "2em",
      minWidth: "2em",
      minHeight: "2em",
      cursor: "pointer",
    },
    ...{
      backgroundColor: props.color ? props.color : "white",
    },
  };

  return (
    <div className="Number-wrapper">
      <Button variant="contained" style={buttonStyle} onClick={props.onClick}>
        {props.number}
      </Button>
    </div>

    // <div className="Number-element">
    //   {/* <button style={{ background: props.color }} onClick={props.onClick}>
    //     {props.number}
    //   </button> */}

    // </div>
  );
};

export default Number;
