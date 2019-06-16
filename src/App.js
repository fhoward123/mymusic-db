import React, {Component} from 'react';

const axios = require('axios');

/// components ///
// import Header from './components/Header'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            submitter: '',
            title: '',
            artist: '',
            image: '',
            genre: '',
            label: '',
            trackCnt: 0,
            runtime: '',
            media: '',
            yearMFG: 0,
            yearReleased: 0,
            barcode: 0,
            songs: []
        }
        this.fetchAlbums = this.fetchAlbums.bind(this)
    }

    fetchAlbums() {
        console.log('Inside fetchAlbums');
        // axios.get("https://mymusic-backend.herokuapp.com/collection/albums");
        axios.get('http://localhost:3000/collection/albums/')
        .then( response => {
            console.log('ResponseData: ', response.data);
            console.log('ResponseStatus: ', response.status);
            this.setState({ albumList: response.data })
        })
        .catch( response => {
            console.log('catch response.message: ', response.message);
        })
    }

    componentDidMount() {
        this.fetchAlbums();
    }

    render() {
        return(
            <div className="main-container">
                <p className="App-intro">{this.state.albumList
                ? this.state.albumList[0].title
                : ''

                }

                </p>
            </div>
        );
    }
}

export default App;
