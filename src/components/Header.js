import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <div className="custom-select">
                    <button
                        className="add-button"
                        onClick={() => {
                            this.props.showPopup(true)
                        }}>
                        Add Album
                    </button>
                <select id="sortOption"
                    value={this.selectValue}
                    onChange={this.props.handleChange}
                >
                    <option value="" selected disabled hidden>Sort Option</option>
                    <option value="title">Title</option>
                    <option value="artist">Artist</option>
                    <option value="genre">Genre</option>
                    <option value="yearReleased">Release Date</option>
                </select>
            </div>
        );
    }
}

export default Header
