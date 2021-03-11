import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    // 3 classes Die, icon, shaking
    return (
      <i
        className={`Die fas fa-dice-${this.props.face} ${
          this.props.rolling && "shaking"
        }`}
      ></i>
    );
  }
}

export default Die;
