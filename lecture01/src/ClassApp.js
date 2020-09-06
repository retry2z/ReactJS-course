import React from 'react';
import logo from './logo.svg';
import './App.css';
import LearnReact from "./LearnReact/learnReact";
import Counter from './Counter/Counter';
import Code from './Code/Code';
import Input from './Input/Input';
import Doc from './Database/doc';
import Speech from './Speech/doc';


class ClassApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            hide: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false,
            })
        }, 2000)
    }

    calcResult = (a, b) => {
        return a + b
    };

    toggleCounter = () => {
        this.setState({
            hide: !this.state.hide,
        })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>
                    <p>Loading....</p>
                </div>
            )
        }

        return (
            <div className="App" >
                <header className="App-header">
                    <Input />
                    <LearnReact />
                    <img src={logo} className="App-logo" alt="logo" />
                    <Doc />
                    <Speech />
                    <p><Code>TEST</Code></p>
                    <p>Result : {this.calcResult(101, 5)}</p>
                    {this.state.hide ? null : <Counter counter={1} />}
                    <button onClick={this.toggleCounter}>Toggle</button>
                </header>
            </div>
        );
    }
}

export default ClassApp