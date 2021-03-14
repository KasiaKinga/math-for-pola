import React, { Component } from "react";
import Die from "./Die";
import CorrectElement from "./CorrectElement";
import ProgressBar from "./ProgressBar";
import Confetti from "./Confetti";
import Number from "./Number";
import "./RollDice.css";
import "./Symbol.css";
import "./Form.css";
import "./Number.css";
import IncorrectElement from "./IncorrectElement";

const idx1 = Math.floor(Math.random() * 6);
const idx2 = Math.floor(Math.random() * 6);

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      // die1: this.props.sides[
      //   Math.floor(Math.random() * this.props.sides.length)
      // ],
      // die2: this.props.sides[
      //   Math.floor(Math.random() * this.props.sides.length)
      // ],
      die1: this.props.sides[idx1],
      die2: this.props.sides[idx2],
      sum: idx1 + idx2 + 2,
      // sum:
      //   this.props.sides.indexOf(this.state.die1) +
      //   this.props.sides.indexOf(this.state.die2) +
      //   2,
      isRolling: false,
      title: "",
      completionStatus: "",
      percentage: 0,
      buttonColors: {},
    };
    this.roll = this.roll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.callFunction = this.callFunction.bind(this);
    this.checkNumber = this.checkNumber.bind(this);
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
  // handleSubmit() {
  //   // event.preventDefault();
  //   if (parseInt(this.state.title) === this.state.sum) {
  //     this.setState({
  //       completionStatus: "correct",
  //       percentage: this.state.percentage + 20,
  //     });
  //   } else {
  //     this.setState({ completionStatus: "incorrect" });
  //   }
  //   this.setState({ title: "" });
  // }

  roll() {
    // pick 2 new rolls
    const randomIdx1 = Math.floor(Math.random() * this.props.sides.length);
    const randomIdx2 = Math.floor(Math.random() * this.props.sides.length);

    const newDie1 = this.props.sides[randomIdx1];
    const newDie2 = this.props.sides[randomIdx2];
    console.log("sum", randomIdx1 + randomIdx2 + 2);
    // set state with new rolls and sum
    this.setState({
      die1: newDie1,
      die2: newDie2,
      sum: randomIdx1 + randomIdx2 + 2,
      isRolling: true,
      completionStatus: "",
      buttonColors: {},
    });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  checkNumber(num) {
    if (num === this.state.sum) {
      this.setState({
        completionStatus: "correct",
        percentage: this.state.percentage + 20,
        buttonColors: { ...this.state.buttonColors, ...{ [num]: "#a4dd00" } },
      });
    } else {
      this.setState({
        completionStatus: "incorrect",
        buttonColors: {
          ...this.state.buttonColors,
          ...{ [num]: "lightskyblue" },
        },
      });
    }
    this.setState({ title: "" });
  }
  render() {
    let textForButton;
    if (this.state.isRolling) {
      textForButton = "...";
    } else if (this.state.title) {
      textForButton = "Check";
    } else {
      textForButton = "Rzuć kostką";
    }

    let animatedElement;
    if (this.state.completionStatus === "correct") {
      animatedElement = <CorrectElement />;
    } else if (this.state.completionStatus === "incorrect") {
      animatedElement = <IncorrectElement />;
    } else {
      animatedElement = "";
    }

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
      <div className="RollDice">
        {this.state.percentage === 100 && <Confetti />}
        <div
          style={{
            top: 0,
            width: "100%",
            position: "absolute",
          }}
        >
          {animatedElement}
        </div>
        <div className="RollDice-container">
          <Die face={this.state.die1} rolling={this.state.isRolling} />
          <i className="Symbol fas fa-plus"></i>
          <Die face={this.state.die2} rolling={this.state.isRolling} />
        </div>

        <div className="Numbers-container">
          {/* <ul> */}
          {numbers.map((num) => {
            return (
              <Number
                key={num}
                number={num}
                disabled={this.state.completionStatus === "correct"}
                color={this.state.buttonColors[num]}
                onClick={() => this.checkNumber(num)}
              />
            );
          })}
          {/* </ul> */}
        </div>

        {/* <div className="Form">
          <form>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="?"
            />
          </form>
        </div> */}

        <button
          className="Roll-button"
          onClick={() => this.roll()}
          disabled={this.state.isRolling}
        >
          {textForButton}
        </button>

        <div className="Progress-bar-container">
          <ProgressBar percentage={this.state.percentage} />
        </div>
      </div>
    );
  }
}

export default RollDice;
