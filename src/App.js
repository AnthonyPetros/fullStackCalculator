import React, { Component } from 'react';
import './styles.css';
import ResultComponent from './components/result';
import KeysComponent from './components/buttons';

class App extends Component {
    state = {
        result: "",
        num1: "",
        num2: "",
        sign: ""
    }


    onClick = button => {
        if (button == '=') {
            /*call the backend based on sign */
        } else if (button == 'back') {
            this.setState({
                result: this.state.result.substring(0, this.state.result.length - 1)
            })
        } else if (button == '+' || button == '-' || button == '*') {
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