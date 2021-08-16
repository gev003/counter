import "./App.css";
import { Component } from "react";
import MainComponent from "./components/mainComponent";
import React from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val1: "",
      val2: "",
      btnIsTrue: true,
    };
    this.intervalId = null;
  }

  startInterval = () => {
    // if (this.intervalId) {
    //   clearInterval(this.intervalId);
    // }

    this.setState({ btnIsTrue: false });

    const hel = setInterval(() => {
      if (this.state.val1 === 0 && this.state.val2 === 0) {
        alert("Time End");
        clearInterval(hel);
        return;
      }

      if (this.state.val2 < 1) {
        this.setState({ val1: this.state.val1 - 1, val2: 60 });
      }

      this.setState({ val2: this.state.val2 - 1 });
    }, 1000);

    this.setState((prevState) => {
      return {
        ...prevState,
      };
    });
    this.intervalId = hel;
  };

  update = (childValue, childValue1) => {
    this.setState({ val1: childValue, val2: childValue1 });
  };

  stopInterval = () => {
    this.setState({ val1: 0, val2: 0, btnIsTrue: true });
    clearInterval(this.intervalId);
  };

  render() {
    const { val1, val2 } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <MainComponent
          update={this.update}
          startInterval={this.startInterval}
          cease={this.stopInterval}
          finalState={this.state.btnIsTrue}
        />
        <p>
          {val1} : {val2}
        </p>
      </div>
    );
  }
}
