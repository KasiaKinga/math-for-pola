import React, { Component } from "react";
import Die from "./Die";
import CorrectElement from "./CorrectElement";
import ProgressBar from "./ProgressBar";
import Confetti from "./Confetti";
import "./RollDice.css";
import "./Symbol.css";
import "./Form.css";
import IncorrectElement from "./IncorrectElement";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      sum: 0,
      isRolling: false,
      title: "",
      completionStatus: "",
      percentage: 0,
    };
    this.roll = this.roll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callFunction = this.callFunction.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      completionStatus: "",
    });
  }

  callFunction(textInButton) {
    if (textInButton === "Check") {
      this.handleSubmit();
    } else {
      this.roll();
    }
  }
  handleSubmit() {
    // event.preventDefault();
    if (parseInt(this.state.title) === this.state.sum) {
      this.setState({
        completionStatus: "correct",
        percentage: this.state.percentage + 20,
      });
    } else {
      this.setState({ completionStatus: "incorrect" });
    }
    this.setState({ title: "" });
  }

  roll() {
    // pick 2 new rolls
    const randomIdx1 = Math.floor(Math.random() * this.props.sides.length);
    const randomIdx2 = Math.floor(Math.random() * this.props.sides.length);

    const newDie1 = this.props.sides[randomIdx1];
    const newDie2 = this.props.sides[randomIdx2];
    // set state with new rolls and sum
    this.setState({
      die1: newDie1,
      die2: newDie2,
      sum: randomIdx1 + randomIdx2 + 2,
      isRolling: true,
      completionStatus: "",
    });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    let textForButton;
    if (this.state.isRolling) {
      textForButton = "Rolling";
    } else if (this.state.title) {
      textForButton = "Check";
    } else {
      textForButton = "Roll dice";
    }

    let animatedElement;
    if (this.state.completionStatus === "correct") {
      animatedElement = <CorrectElement />;
    } else if (this.state.completionStatus === "incorrect") {
      animatedElement = <IncorrectElement />;
    } else {
      animatedElement = "";
    }
    return (
      <div className="RollDice">
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            border: "2px red solid",
          }}
        > */}
        {this.state.percentage === 100 && <Confetti />}
        <div className="RollDice-container">
          <Die face={this.state.die1} rolling={this.state.isRolling} />
          <i className="Symbol fas fa-plus"></i>

          <Die face={this.state.die2} rolling={this.state.isRolling} />
        </div>

        <div className="Form">
          <form>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="?"
            />
          </form>
        </div>

        <button
          onClick={() => this.callFunction(textForButton)}
          disabled={this.state.isRolling}
        >
          {textForButton}
        </button>

        <div
          style={{
            // display: "flex",
            // justifyContent: "center",
            width: "100%",
            textAlign: "center",
            border: "2px red solid",

            // width: "80vw",
          }}
        >
          <ProgressBar percentage={this.state.percentage} />
        </div>
        <div>{animatedElement}</div>
        {/* </div> */}
      </div>
    );
  }
}

export default RollDice;
