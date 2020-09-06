import React from 'react';
const firebaseConfig = {
    apiKey: "AIzaSyAlhPGy2SkRK-mP_9Ftlr6cxQE8Daot8LA",
    authDomain: "workshop-project-58361.firebaseapp.com",
    databaseURL: "https://workshop-project-58361.firebaseio.com",
    projectId: "workshop-project-58361",
    storageBucket: "workshop-project-58361.appspot.com",
    messagingSenderId: "1060428135996",
    appId: "1:1060428135996:web:329e57b54dbe6555be0d39",
    measurementId: "G-GWJ0K3TXFV"
};

var firebase = require('firebase/app');
require('firebase/firestore');
var app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

class Doc extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: 'loading'
        }
    }

    componentDidMount() {
        const doc = db.collection('rooms').doc('PnyQHA465RV95EfY5EhQ');

        doc.onSnapshot(docSnapshot => {
            console.log(`Received doc snapshot: ${docSnapshot.data().isThereMovement}`);
            this.setState({
                data: docSnapshot.data().isThereMovement
            })
        }, err => {
            console.log(`Encountered error: ${err}`);
        });
    }

    render() {
        return (
            <div>
                <p>This is emitted form DB: {this.state.data + ''}</p>
            </div>
        )
    }
}

export default Doc