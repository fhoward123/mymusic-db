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
                    submitter = {this.props.submitter}
                    title = {this.props.title}
                    artist = {this.props.artist}
                    imageURL = {this.props.imageURL}
                    genre = {this.props.genre}
                    label = {this.props.label}
                    trackCnt = {this.props.trackCnt}
                    runtime = {this.props.runtime}
                    media = {this.props.media}
                    yearMFG = {this.props.yearMFG}
                    countryMFG = {this.props.countryMFG}
                    yearReleased = {this.props.yearReleased}
                    barcode = {this.props.barcode}
                    handleChange = {this.props.handleChange}
                    albumID = {this.props.albumID}
                    editing = {this.props.editing}
                    setNoEdit = {this.props.setNoEdit}
                    clearForm = {this.props.clearForm}
                    goToTop = {this.props.goToTop}
                />
                <h2 className="mainTitle">The Collection</h2>
                <li className="no-bullet bold cursor bot-bord" onClick={() => {this.props.getAlbums()}}>
                    View Albums in Collection ({this.props.albumCnt})
                </li>
                <div className="album-container">
                {this.props.albumList
                    ?
                    this.props.albumList.map((album, index) => {
                        console.log('album: ', album);
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
