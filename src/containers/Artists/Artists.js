import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardContainer from '../../containers/CardContainer/CardContainer.js';
import { setArtistInLocation } from '../../actions/actions.js';
import './Artists.css';

export class Artists extends Component {
  render () {  
    return (
      <div className='artist-page'>
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