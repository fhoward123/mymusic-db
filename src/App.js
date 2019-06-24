import React, {Component} from 'react';

/// components ///
import AlbumList from './components/AlbumList';

const axios = require('axios');

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: false,
            editing: false,
            submitter: '',
            title: '',
            artist: '',
            imageURL: '',
            genre: '',
            label: '',
            trackCnt: '',
            runtime: '',
            media: '',
            yearMFG: '',
            countryMFG: '',
            yearReleased: '',
            barcode: '',
            songs: [],
            albumArray: [],
            sortOption: 'title'
        }
        this.getAlbums = this.getAlbums.bind(this);
        this.deleteAlbum = this.deleteAlbum.bind(this);
        this.albumIndex = this.albumIndex.bind(this);
        this.showPopup = this.showPopup.bind(this);
        this.addAlbum = this.addAlbum.bind(this);
        this.getAlbumById = this.getAlbumById.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.setNoEdit = this.setNoEdit.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.updateArray = this.updateArray.bind(this);
        this.removeFromArray = this.removeFromArray.bind(this);
    }

    setNoEdit() {
        this.setState({
            editing: false
        });
    }

    handleChange = (event) => {
        console.log('Inside handleChange (value, id): ', event.target.value, event.target.id)
        this.setState({[event.target.id]: event.target.value}, () => {
            console.log('sortOption, state: ', this.state.sortOption, this.state)
            this.buildAlbumArray(this.state.albumArray, this.state.sortOption);
        })
    }

    getAlbumById(albumId, arrayIndex) {
        console.log('Inside getAlbumById (albumId, arrayIndex): ', albumId, arrayIndex)
        axios.get('https://mymusic-backend.herokuapp.com/collection/albums/' + albumId)
        // axios.get('http://localhost:3000/collection/albums/' + albumId)
        .then(response => {
            const album = response.data;
            console.log(album);
            this.setState({
                submitter: album.submitter,
                title: album.title,
                artist: album.artist,
                imageURL: album.imageURL,
                genre: album.genre,
                label: album.label,
                trackCnt: album.trackCnt,
                runtime: album.runtime,
                media: album.media,
                yearMFG: album.yearMFG,
                countryMFG: album.countryMFG,
                yearReleased: album.yearReleased,
                barcode: album.barcode,
                id: album._id,
                arrayIndex: arrayIndex,
                editing: true
            });
        });
    }

    addAlbum(album) {
        console.log('Inside addAlbum (album): ', album)
        axios.post('https://mymusic-backend.herokuapp.com/collection/albums/', album, {
        // axios.post('http://localhost:3000/collection/albums/', album, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( response => {
            console.log('addAlbum:ResponseData: ', response.data);
            console.log('addAlbum:ResponseStatus: ', response.status);
            this.updateArray(response.data)
        })
        .catch( response => {
            console.log('catch response.message: ', response.message);
        })
    }

    // Remove album from array
    removeFromArray(arrayIndex) {
        console.log('Inside removeFromArray (arrayIndex): ', arrayIndex);
        this.setState(prevState => {
            console.log('prevState: ', prevState);
            prevState.albumArray.splice(arrayIndex, 1);
            return {
                albumArray: prevState.albumArray,
                albumCount: prevState.albumArray.length
            }
        })
    }

    updateArray(album, arrayIndex) {
        console.log('Inside App:updateArray (album): ', album);
        console.log('Inside App:updateArray (arrayIndex): ', arrayIndex);

        if ( typeof arrayIndex !== 'undefined' ) {
            this.setState( prevState => {
                prevState.albumArray[arrayIndex] = album;
                console.log('Inside App:updateArray IF (prevState): ', prevState)
                const sortedAlbumArray = prevState.albumArray.sort(this.sortAlbums(prevState.sortOption))
                console.log('Inside App:updateArray IF (sortedAlbumArray): ', sortedAlbumArray)
                // We are returning an object, thus the return {}
                return {
                    albumArray: sortedAlbumArray,
                    albumCount: sortedAlbumArray.length
                }
            })
        }
        else {
            // prevState is a copy of the currentState
            this.setState( prevState => {
                prevState.albumArray.push(album)
                console.log('Inside App:updateArray ELSE (prevState): ', prevState)
                const sortedAlbumArray = prevState.albumArray.sort(this.sortAlbums(prevState.sortOption))
                console.log('Inside App:updateArray IF (sortedAlbumArray): ', sortedAlbumArray)
                // We are returning an object, thus the return {}
                return {
                    albumArray: sortedAlbumArray,
                    albumCount: sortedAlbumArray.length
                }
            })
        }
    }

    showPopup = (status) => {
        console.log('Inside showPopup (status): ', status);
        console.log('editing: ', this.state.editing)
        if ( ! this.state.editing ) {
            this.clearForm()
        }
        this.setState({
            modalIsOpen: status,
        });
    }

    albumIndex () {
        console.log('Inside albumIndex');
        axios.get('https://mymusic-backend.herokuapp.com/collection/')
        // axios.get('http://localhost:3000/collection/')
        .then( response => {
            console.log('albumIndex:ResponseData: ', response.data);
            console.log('albumIndex:ResponseStatus: ', response.status);
            this.setState({ albumCount: response.data.album_count })
        })
        .catch( response => {
            console.log('catch response.message: ', response.message);
        })
    }

    sortAlbums = (key, order='asc') => {
        return function(a, b) {
            if (! a.hasOwnProperty(key)  ||  ! b.hasOwnProperty(key) ) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase()
                : a[key];

            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase()
                : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    };

    buildAlbumArray(albums, key) {
        console.log('Inside buildAlbumArray (key): ', key);
        const albumArray = [];
        albums.forEach((album) => {
            albumArray.push(album);
        })
        console.log('albumArray: ', albumArray)

        const sortedAlbumArray = albumArray.sort(this.sortAlbums(key));

        this.setState({
            albumArray: sortedAlbumArray,
            albumCount: albumArray.length
        })
    }

    getAlbums() {
        console.log('Inside getAlbums');
        axios.get('https://mymusic-backend.herokuapp.com/collection/albums')
        // axios.get('http://localhost:3000/collection/albums/')
        .then( response => {
            console.log('ResponseData: ', response.data);
            console.log('ResponseStatus: ', response.status);
            this.setState({ albumArray: response.data });
            this.buildAlbumArray(response.data, this.state.sortOption);
        })
        .catch( response => {
            console.log('catch response.message: ', response.message);
        })
    }

    deleteAlbum(id, arrayIndex) {
        console.log('Inside deleteAlbum');
        axios.delete('https://mymusic-backend.herokuapp.com/collection/albums/' + id)
        // axios.delete('http://localhost:3000/collection/albums/' + id)
        .then( response => {
            console.log('ResponseData: ', response.data);
            console.log('ResponseStatus: ', response.status);
            this.setState({ albumDeleted: response.data });
            this.removeFromArray(arrayIndex);
        })
        .catch( response => {
            console.log('catch response.message: ', response.message);
        })
    }

    clearForm = () => {
        console.log('Inside clearForm')
        this.setState({
            editing: false,
            submitter: '',
            title: '',
            artist: '',
            imageURL: '',
            genre: '',
            label: '',
            trackCnt: '',
            runtime: '',
            media: '',
            yearMFG: '',
            countryMFG: '',
            yearReleased: '',
            barcode: '',
            songs: []
        })
    }

    componentDidMount() {
        this.albumIndex();
    }

    render() {
        return(
            <div className="">
                <AlbumList
                    albumCnt = {this.state.albumCount}
                    getAlbums = {this.getAlbums}
                    showPopup = {this.showPopup}
                    modalIsOpen = {this.state.modalIsOpen}
                    addAlbum = {this.addAlbum}
                    deleteAlbum = {this.deleteAlbum}
                    getAlbumById = {this.getAlbumById}
                    album = {this.state}
                    handleChange = {this.handleChange}
                    albumID = {this.state.id}
                    editing = {this.state.editing}
                    setNoEdit = {this.setNoEdit}
                    clearForm = {this.clearForm}
                    albums = {this.state.albumArray}
                    updateArray = {this.updateArray}
                    arrayIndex = {this.state.arrayIndex}
                    sortOption = {this.state.sortOption}
                />
            </div>
        );
    }
}

export default App;
