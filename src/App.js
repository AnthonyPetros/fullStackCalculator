import React, { Component } from 'react';
import './styles.css';
import ResultComponent from './components/result';
import KeysComponent from './components/buttons';

class App extends Component {
    state = {
        result: ""
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