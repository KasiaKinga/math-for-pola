import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RollDice from "./RollDice";
import HomePage from "./HomePage";

const App = () => {
  const roll2dices = () => {
    return <RollDice numOfDices={2} />;
  };
  const roll3dices = () => {
    return <RollDice numOfDices={3} />;
  };

  return (
    <Router>
      <div className="App">
        <main>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/2kostki" component={roll2dices} />
          <Route exact path="/3kostki" component={roll3dices} />
        </main>
      </div>
    </Router>
  );
};

export default App;
