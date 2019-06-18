//Remember, for components we always need React and the Component class
import React, { Component } from 'react'
import Modal from 'react-foundation-modal';

const overlayStyle = {
    'backgroundColor': 'rgba(33,10,10,.45)'
};

class Form extends Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     submitter: '',
        //     title: '',
        //     artist: '',
        //     imageURL: '',
        //     genre: ''
        // }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAlbum(this.state)
        this.props.showPopup(false)
        this.clearForm()
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    clearForm = () => {
        // this.setState({
        //     submitter: '',
        //     title: '',
        //     artist: '',
        //     imageURL: '',
        //     genre: ''
        // })
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
                    size="small"
                    overlayStyle={overlayStyle} >
                    <h3>Add Album</h3>
                    <p>Fill in the fields</p>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text'
                           id='submitter'
                           onChange={this.handleChange}
                           placeholder="submitter"
                        />
                        <input type='text'
                           id='title'
                           onChange={this.handleChange}
                           placeholder="title"
                        />
                        <input type='text'
                           id='artist'
                           onChange={this.handleChange}
                           placeholder="artist"
                        />
                        <input type='text'
                           id='imageURL'
                           onChange={this.handleChange}
                           placeholder="image URL"
                        />
                        <input type='text'
                           id='genre'
                           onChange={this.handleChange}
                           placeholder="genre"
                        />
                        <input type='text'
                           id='label'
                           onChange={this.handleChange}
                           placeholder="label"
                        />
                        <input type='number'
                           id='trackCnt'
                           onChange={this.handleChange}
                           placeholder="number of tracks"
                        />
                        <input type='text'
                           id='runtime'
                           onChange={this.handleChange}
                           placeholder="runtime"
                        />
                        <input type='text'
                           id='media'
                           onChange={this.handleChange}
                           placeholder="type of media"
                        />
                        <input type='number'
                           id='yearMFG'
                           onChange={this.handleChange}
                           placeholder="year manufactured"
                        />
                        <input type='text'
                           id='countryMFG'
                           onChange={this.handleChange}
                           placeholder="country of origin"
                        />
                        <input type='number'
                           id='yearReleased'
                           onChange={this.handleChange}
                           placeholder="year released"
                        />
                        <input type='text'
                           id='barcode'
                           onChange={this.handleChange}
                           placeholder="barcode"
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
