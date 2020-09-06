import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: props.counter
        }
    }

    updateCounter = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    get counterValue() {
        return this.state.counter;
    }

    render() {
        return (
            <div>
                <p>Counter: {this.counterValue} : <button onClick={this.updateCounter}>Increment</button></p>
            </div>
        )
    }
}

export default Counter