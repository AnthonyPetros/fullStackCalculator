import React, { Component } from 'react';
import './styles.css';
import ResultComponent from './components/results';
import KeysComponent from './components/buttons';
import axios from "axios";

class App extends Component {
    state = {
        result: "",
        num1: "",
        num2: "",
        sign: ""
    }


    onClick = button => {
        if (button === '=') {
            this.state.num2 = this.state.result
            if(this.state.sign === '+'){
                axios.get(`http://localhost:8080/calculate/add?num1=${this.state.num1}&num2=${this.state.num2}`).then(response =>
                    this.setState({
                        result:  response.data.toString(),
                        num1: "",
                        num2: "",
                        sign: ""
                      })
                    )
            }else if(this.state.sign === '-'){
                axios.get(`http://localhost:8080/calculate/subtract?num1=${this.state.num1}&num2=${this.state.num2}`).then(response =>
                    this.setState({
                        result:  response.data.toString(),
                        num1: "",
                        num2: "",
                        sign: ""
                      })
                    )
            }else if(this.state.sign === '*'){
                axios.get(`http://localhost:8080/calculate/multiply?num1=${this.state.num1}&num2=${this.state.num2}`).then(response =>
                    this.setState({
                        result:  response.data.toString(),
                        num1: "",
                        num2: "",
                        sign: ""
                      })
                    )
            }
            
        } else if (button === 'back') {
            this.setState({
                result: this.state.result.substring(0, this.state.result.length - 1)
            })
        } else if (button === '+' || button === '-' || button === '*') {
            this.setState({
                num1: this.state.result,
                sign: button,
                result: ""
            })
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    }
    


    render() {
        return (
            <div>
                <div className="body">
                    <h1>My Calculator</h1>
                    <ResultComponent result={this.state.result} />
                    <KeysComponent onClick={this.onClick} />
                </div>
            </div>
        )
    }
}

export default App;