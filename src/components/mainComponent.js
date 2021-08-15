import { Component } from "react"
import "../App.css";

export default class MainComponent extends Component {
   
        state = {
            val1: 0,
            val2: 0
        }
    
        sendData = () => {
            if(this.state.val1 >= 0 && this.state.val2 >= 0 && this.state.val1 + this.state.val2 > 0) {
                this.props.values(this.state.val1, this.state.val2)
                this.props.blyat()
            }else {
                  alert('Please Write Valid Numbers')
                }
            
        }

        stopBtn = () => {
           this.props.cease()
        }

    render() {
        return (
            <div className="content">
                <button onClick={this.sendData}>Start</button>
                <button onClick={this.stopBtn}>Stop</button> <br/>
                <input type="number" onChange={(evt) => {
                    this.setState({val1: Number(evt.target.value)})
                }}></input>
                <input type="number" onChange={(evt) => {
                    this.setState({val2: Number(evt.target.value)})
                }}></input>
            </div>
        )
    }
}