import React, { Component } from 'react'

class Albums extends Component {

    setupAlbumEdit(id) {
        console.log('Inside setupAlbumEdit (id): ', id)
        this.props.getAlbumById(id)
        this.props.showPopup(true)
    }

    render() {
        console.log('Inside Albums:render: (this.props)', this.props)
        return(
            <div className="albums">
                <ul className='no-bullet'>
                   <img className="thumb" src={this.props.album.imageURL} title={this.props.album.title} alt={this.props.album.title}></img>
                   <li><span className="bold">Title: </span>{this.props.album.title}</li>
                   <li><span className="bold">Artist: </span>{this.props.album.artist}</li>
                   <li><span className="bold">Tracks: </span>{this.props.album.trackCnt}</li>
                   <li><span className="bold">Run time: </span>{this.props.album.runtime}</li>
                   <li><span className="bold">Released: </span>{this.props.album.yearReleased}</li>
                   <li><span className="bold">Genre: </span>{this.props.album.genre}</li>
                   <li><span className="bold">Label: </span>{this.props.album.label}</li>
                   <li><span className="bold">Media: </span>{this.props.album.media}</li>
                   <li><span className="bold">Mfg Year: </span>{this.props.album.yearMFG}</li>
                   <li><span className="bold">Origin: </span>{this.props.album.countryMFG}</li>
                   <li><span className="bold">barcode: </span>{this.props.album.barcode}</li>
               </ul>
               <div>
                   <br/>
                   <div>
                       <i
                          className="cursor edit far fa-edit"
                          onClick={ () => { this.setupAlbumEdit(this.props.album._id) }}
                       ></i>
                   </div>
                   <br/>
                   <div>
                       <i
                          className="cursor delete far fa-trash-alt"
                          onClick={ () => { this.props.deleteAlbum(this.props.album._id, this.props.arrayIndex) }}
                       ></i>
                   </div>
               </div>
            </div>
        )
    }
}

export default Albums
