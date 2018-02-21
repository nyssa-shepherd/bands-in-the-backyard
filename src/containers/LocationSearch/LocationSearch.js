import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { setLocation, fetchApiEvents, fetchArtist, setArtistInLocation } from '../../actions/actions.js';
import locationObj from '../../locationObject.js';


export class LocationSearch extends Component {
  constructor () {
    super();
    this.state = {
      inputVal: '',
      artist: '',
      favArtists: []
    };
  }

  componentDidMount = async() => {
    const { fetchApiEvents, setLocation } = this.props;
    const location = localStorage.getItem('location');

    localStorage.location ?  
      await fetchApiEvents(locationObj[location]) && setLocation(location)
      : null;
  }

  inputHandler = (e) => {
    const inputVal = e.target.value;
    const { match, setLocation } = this.props;

    this.setState({inputVal});
    match.path === '/artists' ? 
      this.setState({artist: inputVal}) : setLocation(inputVal);
  }

  submitHandler = async(e) => {
    e.preventDefault();
    await this.callFetch();
    
    this.props.match.path === '/artists' ? await this.setFavoriteArtists() : null;
    this.setLocalStorage();
    this.setState({inputVal: ''});
  }


  callFetch = async() => {
    const { artist } = this.state;
    const { location, fetchApiEvents, fetchArtist, match } = this.props;
    
    return match.path === '/' ?
      await fetchApiEvents(locationObj[location]) : await fetchArtist(artist);
  
  }

  setFavoriteArtists = async() => {
    const { favArtists } = this.state;
    const { location, allArtistEvents } = this.props;
    const splitLocation = location.split(', ');

    let matchLocation = await allArtistEvents.filter(artist => {
      return artist.state === splitLocation[1];
    });
 
    this.setState({favArtists: [...favArtists, matchLocation]}); 
  }

  setLocalStorage = () => {
    const { favArtists } = this.state;
    const { location, allArtistEvents } = this.props;

    this.props.match.path === '/' ?
      localStorage.setItem('location', location)
      :
      localStorage.setItem('favArtists', favArtists);
  }

  render () {
    return (
      <div>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input
            onChange={(e) => this.inputHandler(e)} 
            type='text'
            placeholder='Enter a location'
            value={this.state.inputVal}
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
  allArtistEvents: store.allArtistEvents,
  artistInLocation: store.artistInLocation
});

export const mapDispatchToProps = dispatch => ({
  fetchApiEvents: (locationKey) => dispatch(fetchApiEvents(locationKey)),
  setLocation: location => dispatch(setLocation(location)),
  fetchArtist: artistName => dispatch(fetchArtist(artistName)),
  setArtistInLocation: artist => dispatch(setArtistInLocation(artist))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocationSearch));

LocationSearch.propTypes = {
  setLocation: PropTypes.func,
  fetchApiEvents: PropTypes.func
};