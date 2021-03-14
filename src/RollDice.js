import React, { Component } from "react";
import Die from "./Die";
import CorrectElement from "./CorrectElement";
import ProgressBar from "./ProgressBar";
import Number from "./Number";
import PlayAgain from "./PlayAgain";
import "./RollDice.css";
import "./Symbol.css";
import "./Form.css";
import "./Number.css";
import IncorrectElement from "./IncorrectElement";

const idx1 = Math.floor(Math.random() * 6);
const idx2 = Math.floor(Math.random() * 6);
const idx3 = Math.floor(Math.random() * 6);

const randomNum1 = Math.ceil(Math.random() * 18);
const randomNum2 = Math.ceil(Math.random() * 18);

const initArray = [randomNum1, randomNum2, idx1 + idx2 + idx3 + 3];

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = {
      die1: this.props.sides[idx1],
      die2: this.props.sides[idx2],
      die3: this.props.sides[idx3],
      sum: idx1 + idx2 + 2,
      sum2: idx1 + idx2 + idx3 + 3,
      isRolling: false,
      title: "",
      completionStatus: "",
      percentage: 0,
      buttonColors: {},
      randomNumbers: this.shuffle(initArray),
    };
    this.roll = this.roll.bind(this);
    this.checkSum = this.checkSum.bind(this);
    this.checkSum2 = this.checkSum2.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.checkNumber = this.checkNumber.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //     completionStatus: "",
  //   });
  // }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  roll() {
    // pick 2 new rolls
    const randomIdx1 = Math.floor(Math.random() * this.props.sides.length);
    const randomIdx2 = Math.floor(Math.random() * this.props.sides.length);
    const randomIdx3 = Math.floor(Math.random() * this.props.sides.length);

    const newDie1 = this.props.sides[randomIdx1];
    const newDie2 = this.props.sides[randomIdx2];
    const newDie3 = this.props.sides[randomIdx3];

    if (this.props.numOfDices === 2) {
      this.setState({
        die1: newDie1,
        die2: newDie2,
        sum: randomIdx1 + randomIdx2 + 2,
        isRolling: true,
        completionStatus: "",
        buttonColors: {},
      });
    } else {
      //random nums from 1-18
      const num1 = Math.ceil(Math.random() * 18);
      const num2 = Math.ceil(Math.random() * 18);
      const array = [num1, num2, randomIdx1 + randomIdx2 + randomIdx3 + 3];

      this.setState({
        die1: newDie1,
        die2: newDie2,
        die3: newDie3,
        sum2: randomIdx1 + randomIdx2 + randomIdx3 + 3,
        isRolling: true,
        completionStatus: "",
        buttonColors: {},
        randomNumbers: this.shuffle(array),
      });
    }

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  checkSum(num) {
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

  checkSum2(num) {
    if (num === this.state.sum2) {
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

  playAgain() {
    this.setState({
      completionStatus: "",
      percentage: 0,
      buttonColors: {},
    });
    this.roll();
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
        <PlayAgain
          open={this.state.percentage === 100}
          handleClose={this.playAgain}
        />
        <div
          style={{
            top: 0,
            width: "100%",
            position: "absolute",
          }}
        >
          {animatedElement}
        </div>

        <div>
          {this.props.numOfDices === 2 ? (
            <div className="RollDice-container">
              <Die face={this.state.die1} rolling={this.state.isRolling} />
              <i className="Symbol fas fa-plus"></i>
              <Die face={this.state.die2} rolling={this.state.isRolling} />
            </div>
          ) : (
            <div className="RollDice-container">
              <Die face={this.state.die1} rolling={this.state.isRolling} />
              <i className="Symbol fas fa-plus"></i>
              <Die face={this.state.die2} rolling={this.state.isRolling} />
              <i className="Symbol fas fa-plus"></i>
              <Die face={this.state.die3} rolling={this.state.isRolling} />
            </div>
          )}
        </div>

        {this.props.numOfDices === 2 ? (
          <div className="Numbers-container">
            {numbers.map((num) => {
              return (
                <Number
                  key={num}
                  number={num}
                  disabled={this.state.completionStatus === "correct"}
                  color={this.state.buttonColors[num]}
                  onClick={() => this.checkSum(num)}
                />
              );
            })}
          </div>
        ) : (
          <div className="Numbers-container">
            {this.state.randomNumbers.map((num, idx) => {
              return (
                <Number
                  key={idx}
                  number={num}
                  disabled={this.state.completionStatus === "correct"}
                  color={this.state.buttonColors[num]}
                  onClick={() => this.checkSum2(num)}
                />
              );
            })}
          </div>
        )}

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
