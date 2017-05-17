import React, {Component}from 'react';
import Songs from './Songs';
import {Link} from 'react-router';




const Artist = (props) =>    {

  const selectedArtist = props.selectedArtist;
  const children = props.children;
  const propsToPassToChildren = {
    albums: props.selectedArtistAlbums,
    songs: props.selectedArtistSongs
  }


    return (
      <div>
        <h3>{ selectedArtist.name }</h3>
          <ul className="nav nav-tabs">
            <li><Link to={`/artists/${props.selectedArtist.id}/albums`}>ALBUMS</Link></li>
            <li><Link to={`/artists/${props.selectedArtist.id}/songs`}>SONGS</Link></li>
          </ul>
            { children && React.cloneElement(children, propsToPassToChildren) }

      
      </div>
  )
}

export default Artist;
