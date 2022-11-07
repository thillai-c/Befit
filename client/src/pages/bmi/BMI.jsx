import "./BMI.css";

import bmiTable from "../../assets/bmiTable.png";

// export default function Profile() {
//   return (
//     <div className="BMI">
//       <div id="root"></div>
//     </div>
//   );
// }

import React, { Component } from "react";
// import './App.css';

class BMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "Guest",
      weight: 90,
      height: 180,
      bmi: 27,
      message: "",
      optimalweight: "",
      time: new Date().toLocaleTimeString(),
    };
    this.submitMe = this.submitMe.bind(this);
    this.heightchange = this.heightchange.bind(this);
    this.weightchange = this.weightchange.bind(this);
    this.change = this.change.bind(this);
    this.ticker = this.ticker.bind(this);
    this.blur = this.blur.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  heightchange(e) {
    this.setState({ height: e.target.value });
    e.preventDefault();
  }

  blur(e) {
    this.calculateBMI();
  }
  weightchange(e) {
    this.setState({ weight: e.target.value });
    e.preventDefault();
  }

  calculateBMI() {
    var heightSquared = ((this.state.height / 100) * this.state.height) / 100;
    var bmi = this.state.weight / heightSquared;
    var low = Math.round(18.5 * heightSquared);
    var high = Math.round(24.99 * heightSquared);
    var message = "";
    if (bmi >= 18.5 && bmi <= 24.99) {
      message = "You are in a healthy weight range";
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = "You are overweight";
    } else if (bmi >= 30) {
      message = "You are obese";
    } else if (bmi < 18.5) {
      message = "You are under weight";
    }
    this.setState({ message: message });
    this.setState({
      optimalweight:
        "Your suggested weight range is between " + low + " - " + high,
    });
    this.setState({ bmi: Math.round(bmi * 100) / 100 });
  }

  submitMe(e) {
    e.preventDefault();
    this.calculateBMI();
  }

  ticker() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  componentDidMount() {
    setInterval(this.ticker, 60000);
  }

  change(e) {
    e.preventDefault();
    console.log(e.target);
    // this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className="BMI">
        <div className="App-header">
          <h2>BMI Calculator</h2>
        </div>
        <br />
        <p>
          Body mass index (BMI) is a value derived from the mass (weight) and
          height of a person.
        </p>
        <form onSubmit={this.submitMe}>
          {/* <label>Please enter your name: </label>
          <input
            type="text"
            className="bmi"
            // name="name"
            // value={this.state.name}
            onBlur={this.blur}
            onChange={this.change}
          /> */}
          <br />
          <label>Enter your height in cm: </label>
          <input
            type="text"
            className="bmi"
            name="height"
            value={this.state.height}
            onBlur={this.blur}
            onChange={this.heightchange}
          />
          <br />
          <label>Enter your weight in kg: </label>
          <input
            type="text"
            className="bmi"
            name="weight"
            value={this.state.weight}
            onChange={this.weightchange}
          />

          <br />
          <br />
          <input type="submit" value="Submit" />
          <br />
          <label>
            <br />
            {this.state.checked} Hello {this.state.name}, Your BMI is{" "}
            {this.state.bmi}{" "}
          </label>
          <label>{this.state.message}</label>
          <label>{this.state.optimalweight}</label>
        </form>
        <br />
        <br />
        <img src={bmiTable} alt="" />
      </div>
    );
  }
}

export default BMI;
