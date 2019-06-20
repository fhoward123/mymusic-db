import React, { Component } from 'react'

class SortSelect extends Component {

    render() {
        return (
            <div>
                <select id="sortOption"
                    value={this.selectValue}
                    onChange={this.props.handleChange}
                >
                    <option value="" selected disabled hidden>Choose Sort Option</option>
                    <option value="title">Title</option>
                    <option value="artist">Artist</option>
                    <option value="genre">Genre</option>
                    <option value="yearReleased">Release Date</option>
                </select>
            </div>
        );
    }
}

export default SortSelect
