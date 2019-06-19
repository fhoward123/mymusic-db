//Remember, for components we always need React and the Component class
import React, { Component } from 'react'
import Modal from 'react-foundation-modal';
const axios = require('axios');
const overlayStyle = {
    'backgroundColor': 'rgba(33,10,10,.45)'
};

class Form extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    editAlbum(album) {
        console.log('Inside editAlbum (album): ', album)
        // axios.put('https://mymusic-backend.herokuapp.com/collection/albums/' + id, album, {
        axios.put('http://localhost:3000/collection/albums/' + album.albumID, album, {
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

    handleSubmit = (event) => {
        console.log('Inside Form:handleSubmit (event): ', event)
        event.preventDefault()

        if (this.props.editing) {
            this.editAlbum(this.props)
        }
        else {
            this.props.addAlbum(this.props)
        }
        this.props.showPopup(false)
    }

    render() {
        console.log('Inside Form (this): ', this)

        return(
            <div className="container">
                <p>
                    <button
                        className="button"
                        onClick={() => this.props.showPopup(true)}>
                        Add Album
                    </button>
                </p>
                <Modal
                    open={this.props.modalIsOpen}
                    closeModal={this.props.showPopup}
                    isModal={true}
                    size="full"
                    overlayStyle={overlayStyle} >
                    <p>Fill in the fields and click 'Submit'</p>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text'
                           id='submitter'
                           value={this.props.submitter}
                           onChange={this.props.handleChange}
                           placeholder="submitter"
                        />
                        <input type='text'
                           id='title'
                           value={this.props.title}
                           onChange={this.props.handleChange}
                           placeholder="title"
                        />
                        <input type='text'
                           id='artist'
                           value={this.props.artist}
                           onChange={this.props.handleChange}
                           placeholder="artist"
                        />
                        <input type='text'
                           id='imageURL'
                           value={this.props.imageURL}
                           onChange={this.props.handleChange}
                           placeholder="image URL"
                        />
                        <input type='text'
                           id='genre'
                           value={this.props.genre}
                           onChange={this.props.handleChange}
                           placeholder="genre"
                        />
                        <input type='text'
                           id='label'
                           value={this.props.label}
                           onChange={this.props.handleChange}
                           placeholder="label"
                        />
                        <input type='text'
                           id='runtime'
                           value={this.props.runtime}
                           onChange={this.props.handleChange}
                           placeholder="runtime"
                        />
                        <input type='text'
                           id='media'
                           value={this.props.media}
                           onChange={this.props.handleChange}
                           placeholder="type of media"
                        />
                        <input type='text'
                           id='countryMFG'
                           value={this.props.countryMFG}
                           onChange={this.props.handleChange}
                           placeholder="country of origin"
                        />
                        <input type='text'
                           id='barcode'
                           value={this.props.barcode}
                           onChange={this.props.handleChange}
                           placeholder="barcode"
                        />
                        <input type='number'
                           id='trackCnt'
                           value={this.props.trackCnt}
                           onChange={this.props.handleChange}
                           placeholder="number of tracks"
                        />
                        <input type='number'
                           id='yearReleased'
                           value={this.props.yearReleased}
                           onChange={this.props.handleChange}
                           placeholder="year released"
                        />
                        <input type='number'
                           id='yearMFG'
                           value={this.props.yearMFG}
                           onChange={this.props.handleChange}
                           placeholder="year manufactured"
                        />
                        <button type="submit"
                            className="button">Submit
                        </button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default Form
