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
          <h3>{ console.log('in render ', this.props.album, this.props.currentSong)}</h3>
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
