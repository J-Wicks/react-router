import React, {Component}from 'react';
import Songs from './Songs';
import {Link} from 'react-router';

class Artist extends Component   {
  constructor(props){
    super(props)
    this.state = {

    }
  }



  render(){
    return (
      <div>
        <h3>{this.props.selectedArtist.name}</h3>
      {this.props.selectedArtistAlbums &&
        this.props.selectedArtistAlbums.map(album => {
          return(  
          <div className="col-xs-4" key={ album.id }>
            <Link to={`/albums/${album.id}`} className="thumbnail" onClick={() => this.props.selectAlbum(album.id)}>
              <img src={ album.imageUrl } />
              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>
            </Link>
          </div>
        )})
      }
      <Songs
          songs={this.props.selectedArtistSongs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      
      </div>
  )}
}

export default Artist;
