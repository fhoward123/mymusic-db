import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-foundation-modal';

/// components ///
import Header from './components/Header';
// import Nav from './components/Nav';
// import Form from './components/Form';
// import AlbumList from './components/AlbumList';

const axios = require('axios');

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
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
            countryMFG: '',
            yearReleased: 0,
            barcode: '',
            songs: []
        }

        // this.componentDidMount = this.componentDidMount.bind(this)
        this.getAlbums = this.getAlbums.bind(this);
        this.deleteAlbum = this.deleteAlbum.bind(this);
        this.albumIndex = this.albumIndex.bind(this);
        this.showPopup = this.showPopup.bind(this);
        this.addAlbum = this.addAlbum.bind(this);
        this.editAlbum = this.editAlbum.bind(this);
    }

    addAlbum(album) {
        console.log('Inside addAlbum (album): ', album)
        // axios.post('https://mymusic-backend.herokuapp.com/collection/albums/', album, {
        axios.post('http://localhost:3000/collection/albums/', album, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( response => {
            console.log('ResponseData: ', response.data);
            console.log('ResponseStatus: ', response.status);
        })
        .catch( response => {
            console.log('catch response.message: ', response.message);
        })
    }

    editAlbum(album) {
        console.log('Inside editAlbum (album): ', album)
        // axios.put('https://mymusic-backend.herokuapp.com/collection/albums/' + id, album, {
        axios.put('http://localhost:3000/collection/albums/' + album.id, album, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( response => {
            console.log('ResponseData: ', response.data);
            console.log('ResponseStatus: ', response.status);
        })
        .catch( response => {
            console.log('catch response.message: ', response.message);
        })
    }

    showPopup = (status) => {
        console.log('Inside showPopup (status): ', status);
        this.setState({
            modalIsOpen: status
        });
    }

    albumIndex () {
        console.log('Inside albumIndex');
        // axios.get("https://mymusic-backend.herokuapp.com/collection/");
        axios.get('http://localhost:3000/collection/')
        .then( response => {
            console.log('ResponseData: ', response.data);
            console.log('ResponseStatus: ', response.status);
            this.setState({ albumCount: response.data.album_count })
        })
        .catch( response => {
            console.log('catch response.message: ', response.message);
        })
    }

    getAlbums() {
        console.log('Inside getAlbums');
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

    deleteAlbum(id) {
        console.log('Inside deleteAlbum');
        // axios.delete('https://mymusic-backend.herokuapp.com/collection/albums' + id);
        axios.delete('http://localhost:3000/collection/albums/' + id)
        .then( response => {
            console.log('ResponseData: ', response.data);
            console.log('ResponseStatus: ', response.status);
            this.setState({ albumDeleted: response.data })
        })
        .catch( response => {
            console.log('catch response.message: ', response.message);
        })
    }

    componentDidMount() {
        this.albumIndex();
    }

    render() {
        return(
            <div className="main-container">
                <Header
                    albumCnt = {this.state.albumCount}
                    getAlbums = {this.getAlbums}
                    albumList = {this.state.albumList}
                    showPopup = {this.showPopup}
                    modalIsOpen = {this.state.modalIsOpen}
                    addAlbum = {this.addAlbum}
                    deleteAlbum = {this.deleteAlbum}
                    editAlbum = {this.editAlbum}
                />
            </div>
        );
    }
}

export default App;
