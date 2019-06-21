//Remember, for components we always need React and the Component class
import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'

require("react-bootstrap/ModalHeader")
const axios = require('axios');

class Form extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateAlbum(album) {
        console.log('Inside updateAlbum (album): ', album)
        // axios.put('https://mymusic-backend.herokuapp.com/collection/albums/' + album.albumID, album, {
        axios.put('http://localhost:3000/collection/albums/' + album.albumID, album, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        .then( response => {
            console.log('updateAlbum:ResponseData: ', response.data);
            console.log('updateAlbum:ResponseStatus: ', response.status);
            this.props.updateArray(response.data, this.props.arrayIndex)
        })
        .catch( response => {
            console.log('catch response.message: ', response.message);
        })
    }

    handleSubmit = (event) => {
        console.log('Inside Form:handleSubmit (event): ', event)
        event.preventDefault()
        console.log('Inside Form:handleSubmit (props): ', this.props)

        if (this.props.editing) {
            this.updateAlbum(this.props)
        }
        else {
            this.props.addAlbum(this.props)
        }
        this.props.showPopup(false)
        this.props.setNoEdit()
    }

    render() {
        console.log('Inside Form (this): ', this)

        return(
            <div className="container">
                <Modal
                    show={this.props.modalIsOpen}
                    onHide={this.props.showPopup}
                    dialogClassName="modal"
                    size="sm">
                    <p className="center purple">Fill in the fields and click 'Submit'</p>
                    <form onSubmit={this.handleSubmit} autoComplete="off">
                        {
                     // <input type='text'
                        //    id='submitter'
                        //    value={this.props.submitter}
                        //    onChange={this.props.handleChange}
                        //    placeholder="submitter"
                     // />
                        }
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
                           id='trackCnt'
                           value={this.props.trackCnt}
                           onChange={this.props.handleChange}
                           placeholder="number of tracks"
                        />
                        <input type='text'
                           id='runtime'
                           value={this.props.runtime}
                           onChange={this.props.handleChange}
                           placeholder="runtime"
                        />
                        <input type='text'
                           id='yearReleased'
                           value={this.props.yearReleased}
                           onChange={this.props.handleChange}
                           placeholder="year released"
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
                           id='media'
                           value={this.props.media}
                           onChange={this.props.handleChange}
                           placeholder="type of media"
                        />
                        <input type='text'
                           id='yearMFG'
                           value={this.props.yearMFG}
                           onChange={this.props.handleChange}
                           placeholder="year manufactured"
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
                        <div className="btn-wrapper">
                            <button type="submit"
                                className="submit-button">Submit
                            </button>
                            <button type="button"
                                className="cancel-button"
                                onClick={() => {
                                    this.props.showPopup(false)
                                    this.props.clearForm()
                                }}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default Form
