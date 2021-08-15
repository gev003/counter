import "./App.css";
import { Component } from "react";
import MainComponent from "./components/mainComponent";
import React from "react";

export default class App extends Component {
  
  state = {
    val1: '',
    val2: '',
  }

  grdon = () => {

    const hel = setInterval(() => {

      if(this.state.val1 === 0 && this.state.val2 === 0) {
        alert('Time End')
        clearInterval(hel)
        return;
      }

      if(this.state.val2 < 1) {
        this.setState({val1: this.state.val1 - 1, val2: 60})
      }

      this.setState({val2: this.state.val2 - 1})
      
    }, 1000)

  } 

  update = (childValue, childValue1) => {
    this.setState({val1: childValue, val2: childValue1})
  }

  stopInterval = () => [
    this.setState({val1: 0, val2: 0})
  ]

  render() {

    console.log(this.state);
    const { val1, val2 } = this.state

    return (
      <div className="App">
        <MainComponent values={this.update} blyat={this.grdon} cease={this.stopInterval} />
        <p>{val1} : {val2}</p>
      </div>
    );
  }
}
