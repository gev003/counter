import React, { Component } from "react";
import "../App.css";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val1: "",
      val2: "",
    };

    this.inputRef = React.createRef();
  }

  sendData = () => {
    if (
      this.state.val1 >= 0 &&
      this.state.val2 >= 0 &&
      this.state.val1 + this.state.val2 > 0
    ) {
      this.props.update(this.state.val1, this.state.val2);
      this.props.startInterval();
    } else {
      alert("Please Write Valid Numbers");
      this.setState({ val1: 0, val2: 0 });
      this.props.update(this.state.val1, this.state.val2);
    }
  };

  stopBtn = () => {
    this.props.cease();
    this.setState({ val1: 0, val2: 0 });
  };

  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps.finalState);
    console.log("currentProps", this.props.finalState);
    if (prevProps.finalState !== this.props.finalState) {
      console.log("mainComponent state has changed.");
    }
  }

  render() {
    return (
      <div className="content">
        {this.props.finalState && (
          <button onClick={this.sendData}>Start</button>
        )}
        <button onClick={this.stopBtn}>Stop</button> <br />
        <input
          type="number"
          value={this.state.val1}
          ref={this.inputRef}
          onChange={(evt) => {
            this.setState({ val1: Number(evt.target.value) });
          }}
        ></input>
        <input
          type="number"
          value={this.state.val2}
          onChange={(evt) => {
            this.setState({ val2: Number(evt.target.value) });
          }}
        ></input>
      </div>
    );
  }
}
