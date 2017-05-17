import React, {Component}from 'react';
import Songs from './Songs';

class Album extends Component   {
  constructor(props){
    super(props)

    this.state = {
      selectedAlbum: this.props.album,
      currentSong: this.props.currentSong,
      isPlaying: this.props.isPlaying,
      toggleOne: this.props.toggleOne
    }
  }

  componentDidMount(){
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
    
  }


  render(){
    return (
      <div className="album">
        <div>
          <h3>{this.props.album.name}   
            <a href={`mailto:artfullu@gmail.com?subject=THISTHESUBJECT&body=Youre%20gonna%20love%20${this.props.album.name}`} >       
            <button className="btn basic-btn">
              <i className="a fa-share-square-o"> </i>
            </button>
            </a>
          </h3>
          <img src={ this.props.album.imageUrl} className="img-thumbnail" />
        </div>
      <Songs
          songs={this.props.album.songs}
          currentSong={this.props.currentSong}
          isPlaying={this.props.isPlaying}
          toggleOne={this.props.toggleOne} />
      </div>
  )}
}

export default Album;
