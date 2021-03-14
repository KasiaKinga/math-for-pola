import React, { Component } from "react";
import RollDice from "./RollDice";
// import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfDices: 3,
    };
  }
  render() {
    return (
      <div className="App">
        <RollDice numOfDices={this.state.numberOfDices} />
      </div>
    );
  }
}

export default App;
