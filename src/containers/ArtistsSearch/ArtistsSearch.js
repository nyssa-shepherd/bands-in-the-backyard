import React, { Component } from 'react';
import { setLocation, fetchApiEvents, fetchArtist, setArtistInLocation } from '../../actions/actions.js';
import { connect } from 'react-redux';


class ArtistsSearch extends Component {
  constructor () {
    super();
    this.state = {
      artist: ''
    };
  }

  inputHandler = (e) => {
    const artist = e.target.value;
    this.setState({artist});
  }

  submitHandler = async(e) => {
    e.preventDefault();
    const artistData = await this.props.fetchArtist(this.state.artist);
    const splitLocation = this.props.location.split(', ');
    const filtered = artistData.allArtistsEvents.find(artist => artist.venue.city === splitLocation[0]);
    console.log(filtered);
    this.props.setArtistInLocation(filtered);
  }

  render () {
    return (
      <div>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input
            onChange={(e) => this.inputHandler(e)} 
            type='text'
            value={this.state.artist}
          />
          <button>search</button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  events: store.events,
  location: store.location,
  allArtistEvents: store.allArtistsEvents,
  artistInLocation: store.artistInLocation
});

export const mapDispatchToProps = dispatch => ({
  fetchApiEvents: (locationKey) => dispatch(fetchApiEvents(locationKey)),
  setLocation: location => dispatch(setLocation(location)),
  fetchArtist: artistName => dispatch(fetchArtist(artistName)),
  setArtistInLocation: artist => dispatch(setArtistInLocation(artist))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsSearch);