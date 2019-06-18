//Remember, for components we always need React and the Component class
import React, { Component } from 'react';
// import Albums from './Albums'

class AlbumList extends Component {
    render() {
        console.log('Inside AlbumList (this.props): ', this.props)
        return(
        <div className="container">
            {this.props.albumList}
            <h1>Album Listing: </h1>
             {this.props.albumList[0].title}

        </div>
        )
    }
}

export default AlbumList
