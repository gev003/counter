import "./App.css";
import { Component } from "react";
import PopUp from "./components/togglePop";

export default class App extends Component {
  state = {
    counter: 0,
    isTrue: false,
  };

  togglePop = () => {
    this.setState({
      isTrue: !this.state.isTrue,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.counter > 5) {
      console.log(this.state.counter);
    }
    console.log(prevProps);
    console.log(prevState);
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.counter}
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter - 1,
            });
          }}
        >
          Remove
        </button> */}
        <div className="btn" onClick={this.togglePop}>
          <button>New User?</button>
        </div>
        {this.state.isTrue ? <PopUp toggle={this.togglePop} /> : null}
      </div>
    );
  }
}
