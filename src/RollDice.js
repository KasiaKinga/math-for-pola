import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";
import "./Symbol.css";
import "./Form.css";

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
    };
    this.roll = this.roll.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.roll();
  // }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (parseInt(this.state.title) === this.state.sum) {
      alert("Correct");
    } else {
      alert("Try again");
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
    });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} rolling={this.state.isRolling} />
          <i className="Symbol fas fa-plus"></i>

          <Die face={this.state.die2} rolling={this.state.isRolling} />
          <i className="Symbol fas fa-equals"></i>

          {/* <div className="Form"> */}
          <form>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="?"
            />
            {/* <div className="Check-button"> */}
            {/* <button type="submit">Check</button> */}
            {/* </div> */}
          </form>
          {/* </div> */}
        </div>

        
        <button onClick={this.handleSubmit}>Check if correct</button>

        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling.." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
