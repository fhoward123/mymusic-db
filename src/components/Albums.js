import React, { Component } from 'react'

class Albums extends Component {
    render() {
        console.log('Inside Albums:render: (this.props)', this.props)
        return(
            <div className="items">
                <ul className='no-bullet'>
                   <img src={this.props.image} title={this.props.title} alt={this.props.title}></img>
                   <li><span className="bold">Title: </span>{this.props.title}</li>
                   <li><span className="bold">Artist: </span>{this.props.artist}</li>
                   <li><span className="bold">Tracks: </span>{this.props.trackCnt}</li>
                   <li><span className="bold">Run time: </span>{this.props.runtime}</li>
                   <li><span className="bold">Released: </span>{this.props.yearReleased}</li>
                   <li><span className="bold">Genre: </span>{this.props.genre}</li>
                   <li><span className="bold">Label: </span>{this.props.label}</li>
                   <li><span className="bold">Media: </span>{this.props.media}</li>
                   <li><span className="bold">Mfg Year: </span>{this.props.yearMFG}</li>
                   <li><span className="bold">Country of Mfg: </span>{this.props.countryMFG}</li>
                   <li><span className="bold">barcode: </span>{this.props.barcode}</li>
               </ul>
               <div>
               <i
                  className="edit far fa-edit"
                  onClick={ () => { this.props.editAlbum(this.props, this.props.arrayIndex, this.props.currentArray) }}
               ></i>
               </div>
               <div>
               <i
                  className="delete far fa-trash-alt"
                  onClick={ () => { this.props.deleteAlbum(this.props.id, this.props.arrayIndex, this.props.currentArray) }}
               ></i>
               </div>
            </div>
        )
    }
}

export default Albums
