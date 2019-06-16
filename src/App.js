import React, {Component} from 'react';

const axios = require('axios');
// import axios from 'axios';
/// components ///
// import Header from './components/Header'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            apiResponse: ""
        }
        // this.fetchItems = this.fetchItems.bind(this)
        this.callAPI = this.callAPI.bind(this)
    }

    callAPI() {
        axios.get("https://mymusic-backend.herokuapp.com/collection/albums")
        // axios.get("http://localhost:3000/collection/albums")
        .then(response => {
            console.log('then response.data: ', response.data);
            console.log('then response.status: ', response.status);
            this.setState({ apiResponse: response.data })
        })
        .catch(response => {
            console.log('catch response.data: ', response.data);
            console.log('catch response.status: ', response.status);
        });
    }

    componentDidMount() {
        // fetch('/users')
        // .then(res => res.json())
        // .then(users => this.setState({ users }));
        this.callAPI();
    }

    render() {
        return(
            <div className="main-container">
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
