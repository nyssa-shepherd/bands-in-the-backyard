import React, { Component } from 'react';
import { setLocation, fetchApiEvents, fetchArtist } from '../../actions/actions.js';
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
    await this.props.fetchArtist(this.state.artist);
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
  artists: store.artists
});

export const mapDispatchToProps = dispatch => ({
  fetchApiEvents: (locationKey) => dispatch(fetchApiEvents(locationKey)),
  setLocation: location => dispatch(setLocation(location)),
  fetchArtist: artistName => dispatch(fetchArtist(artistName))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsSearch);