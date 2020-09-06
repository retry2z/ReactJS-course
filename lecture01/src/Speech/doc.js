import React from 'react';
import EventEmitter from './EventEmitter';
import { startListen, stopListen } from './speech-service';

class Speech extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 'loading...'
        }
    }

    componentDidMount() {
        EventEmitter.subscribe('test', (data) => {
            this.setState({
                data
            });
        });
    }

    render() {
        return (
            <div>
                <p>This is emitted from speech: {this.state.data + ''}</p>
                <button onClick={startListen}>Speech</button>
                <button onClick={stopListen}>Abort</button>
            </div>
        )
    }
}

export default Speech