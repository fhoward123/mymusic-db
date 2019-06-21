import React, { Component } from 'react'

class Albums extends Component {

    setupAlbumEdit(id, index) {
        console.log('Inside setupAlbumEdit (id, index): ', id, index)
        this.props.getAlbumById(id, index)
        this.props.showPopup(true)
    }

    scrollToTop() {
        console.log('Inside scrollToTop (this.props.mainApp): ', this.props.mainApp)
        // this.props.mainApp.scrollTo(0,0)
        this.props.mainApp.scrollTop = 0;
    }

    scrollToEnd() {
        console.log('Inside scrollToTop (this.props.mainApp): ', this.props.endApp)
        this.props.endApp.scrollIntoView();
    }

    render() {
        console.log('Inside Albums:render: (this.props)', this.props)
        return(
            <div className="albums">
                <ul className='no-bullet'>
                   <img className="thumb" src={this.props.album.imageURL} title={this.props.album.title} alt={this.props.album.title}></img>
                   <li><span className="bold">Title: </span><span className="values"><b>{this.props.album.title ? this.props.album.title : "-"}</b></span></li>
                   <li><span className="bold">Artist: </span><span className="values"><b>{this.props.album.artist ? this.props.album.artist : "-"}</b></span></li>
                   <li><span className="bold">Tracks: </span><span className="values"><b>{this.props.album.trackCnt ? this.props.album.trackCnt : "-"} </b></span></li>
                   <li><span className="bold">Run time: </span><span className="values"><b>{this.props.album.runtime ? this.props.album.runtime : "-"}</b></span></li>
                   <li><span className="bold">Released: </span><span className="values"><b>{this.props.album.yearReleased ? this.props.album.yearReleased : "-"}</b></span></li>
                   <li><span className="bold">Genre: </span><span className="values"><b>{this.props.album.genre ? this.props.album.genre : "-"}</b></span></li>
                   <li><span className="bold">Label: </span><span className="values"><b>{this.props.album.label ? this.props.album.label : "-"}</b></span></li>
                   <li><span className="bold">Media: </span><span className="values"><b>{this.props.album.media ? this.props.album.media : "-"}</b></span></li>
                   <li><span className="bold">Origin: </span><span className="values"><b>{this.props.album.countryMFG ? this.props.album.countryMFG : "-"}</b></span></li>
                   <li><span className="bold">Notes: </span><span className="values"><b>{this.props.album.yearMFG ? this.props.album.yearMFG : "-"}</b></span></li>
                   <li><span className="bold">Barcode: </span><span className="values"><b>{this.props.album.barcode ? this.props.album.barcode : "-"}</b></span></li>
               </ul>
               <div>
                   <br/>
                   <div>
                       <i
                          className="cursor edit far fa-edit"
                          onClick={ () => { this.setupAlbumEdit(this.props.album._id, this.props.arrayIndex) }}
                       ></i>
                   </div>
                   <br/>
                   <div>
                       <i
                          className="cursor delete far fa-trash-alt"
                          onClick={ () => { this.props.deleteAlbum(this.props.album._id, this.props.arrayIndex) }}
                       ></i>
                   </div>
                   <br/>
                   <div>
                       <i
                           class="cursor green fas fa-arrow-up"
                           onClick={ () => { this.scrollToTop() }}
                       ></i>
                   </div>
                   <br/>
                   <div>
                       <i
                           class="cursor green fas fa-arrow-down"
                           onClick={ () => { this.scrollToEnd() }}
                       ></i>
                   </div>
               </div>
            </div>
        )
    }
}

export default Albums
