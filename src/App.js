import React, { Component } from "react";
import RollDice from "./RollDice";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberOfDices: 2,
    };
  }
  render() {
    // const roll2dices = () => {
    //   <RollDice numOfDices={2} />;
    // };
    // const roll3dices = () => {
    //   <RollDice numOfDices={3} />;
    // };
    return (
      <div className="App">
        {/* <Route exact path="/" component={home} /> */}
        <RollDice numOfDices={this.state.numberOfDices} />
      </div>
    );
  }
}

export default App;
