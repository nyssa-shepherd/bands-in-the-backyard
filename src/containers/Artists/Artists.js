import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardContainer from '../../containers/CardContainer/CardContainer.js';
import { setArtistInLocation } from '../../actions/actions.js';
import Search from '../../containers/Search/Search.js';
import './Artists.css';

export class Artists extends Component {
  setFavoriteArtists = async() => {
    const { location, allArtistEvents, setArtistInLocation } = this.props;
    const splitLocation = location.split(', ');

    let matchLocation = await allArtistEvents.filter(artist => {
      return artist.state === splitLocation[1];
    });
 
    setArtistInLocation(matchLocation);
  }

  render () {  
    return (
      <div className='artist-page'>
        <Search setFavoriteArtists={this.setFavoriteArtists}/>
        <CardContainer />
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  location: store.location,
  allArtistEvents: store.allArtistEvents
});

export const mapDispatchToProps = dispatch => ({
  setArtistInLocation: artist => dispatch(setArtistInLocation(artist))
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);