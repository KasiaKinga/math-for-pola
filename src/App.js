import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RollDice from "./RollDice";
import HomePage from "./HomePage";

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     numberOfDices: 3,
  //   };
  // }

  // const home = () => (
  //   <h1>
  //     Cześć Pola! <br />
  //     Grasz w dodawanie?
  //   </h1>
  // );

  const roll2dices = () => {
    return <RollDice numOfDices={2} />;
  };
  const roll3dices = () => {
    return <RollDice numOfDices={3} />;
  };

  return (
    <Router>
      <div className="App">
        {/* <div>
          <Link to="/2kostki">Dodawanie od 1-12</Link>
          <Link to="/3kostki">Dodawanie od 1-18</Link>
        </div> */}
        <main>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/2kostki" component={roll2dices} />
          <Route exact path="/3kostki" component={roll3dices} />
          {/* <RollDice numOfDices={this.state.numberOfDices} /> */}
        </main>
      </div>
    </Router>
  );
};

export default App;
