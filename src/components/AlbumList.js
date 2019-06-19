//Remember, for components we always need React and the Component class
import React, { Component } from 'react';
import Albums from './Albums';
import Form from './Form';

class AlbumList extends Component {
    render() {
        console.log('Inside AlbumList render (this.props): ', this.props);
        return(
            <div className="container  album-list">
                <Form
                    showPopup = {this.props.showPopup}
                    modalIsOpen = {this.props.modalIsOpen}
                    addAlbum = {this.props.addAlbum}
                    getAlbumById = {this.props.getAlbumById}
                    submitter = {this.props.album.submitter}
                    title = {this.props.album.title}
                    artist = {this.props.album.artist}
                    imageURL = {this.props.album.imageURL}
                    genre = {this.props.album.genre}
                    label = {this.props.album.label}
                    trackCnt = {this.props.album.trackCnt}
                    runtime = {this.props.album.runtime}
                    media = {this.props.album.media}
                    yearMFG = {this.props.album.yearMFG}
                    countryMFG = {this.props.album.countryMFG}
                    yearReleased = {this.props.album.yearReleased}
                    barcode = {this.props.album.barcode}
                    handleChange = {this.props.handleChange}
                    albumID = {this.props.albumID}
                    editing = {this.props.editing}
                    setNoEdit = {this.props.setNoEdit}
                    clearForm = {this.props.clearForm}
                    updateArray = {this.props.updateArray}
                />
                <h2 className="mainTitle">The Collection</h2>
                <li className="no-bullet bold cursor bot-bord" onClick={() => {this.props.getAlbums()}}>
                    View Albums in Collection ({this.props.albumCnt})
                </li>
                <div className="album-container">
                {this.props.albums
                    ?
                    this.props.albums.map((album, index) => {
                        console.log('album: ', album);
                        console.log('index: ', index);
                        return(
                            <div className="left">
                                <Albums
                                   key={index}
                                   album={album}
                                   arrayIndex={index}
                                   deleteAlbum = {this.props.deleteAlbum}
                                   updateAlbum = {this.props.updateAlbum}
                                   showPopup = {this.props.showPopup}
                                   getAlbumById = {this.props.getAlbumById}
                                />
                            </div>
                        );
                    })
                    :  ''
                }
                </div>
            </div>
        )
    }
}

export default AlbumList
