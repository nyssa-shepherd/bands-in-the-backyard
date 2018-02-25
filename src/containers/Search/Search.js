import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Trie } from '@rvwatch/completeMe';
import { 
  setLocation, 
  fetchApiEvents, 
  fetchArtist, 
  setArtistInLocation } from '../../actions/actions.js';
import locationObj from '../../locationObject.js';


export class Search extends Component {
  constructor () {
    super();
    this.state = {
      inputVal: '',
      favArtists: [],
      suggestedWords: []
    };

    this.searchComplete = new Trie();
    this.searchComplete.populate(Object.keys(locationObj));
  }

  componentDidMount = async() => {
    const { fetchApiEvents, setLocation, setArtistInLocation} = this.props;
    const location = localStorage.getItem('location');
    const favArtists = localStorage.getItem('favArtists');
  
    localStorage.location ?  
      await fetchApiEvents(locationObj[location]) && setLocation(location)
      : null;
  
    localStorage.favArtists ? await setArtistInLocation(JSON.parse(favArtists)) : null;  
  }

  inputHandler = (e) => {
    const inputVal = e.target.value;
    const { match, setLocation } = this.props;

    this.setState({inputVal});
    match.path === '/' ? 
      setLocation(inputVal) && this.callFetch() : null;
  }

  submitHandler = async(e) => {
    e.preventDefault();
    const { match, setFavoriteArtists } = this.props;
    await this.callFetch();

    match.path === '/artists' ? await setFavoriteArtists() : null;
    this.setLocalStorage();
    this.setState({inputVal: ''});
  }

  callFetch = async() => {
    const { inputVal } = this.state;
    const { location, fetchApiEvents, fetchArtist, match } = this.props;
    
    return match.path === '/' ?
      await fetchApiEvents(locationObj[location]) : await fetchArtist(inputVal);
  }

  setLocalStorage = () => {
    const { location, match, artistInLocation } = this.props;
    
    match.path === '/' ?
      localStorage.setItem('location', location)
      :
      localStorage.setItem('favArtists', JSON.stringify(artistInLocation));
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));

Search.propTypes = {
  location: PropTypes.string,
  allArtistEvents: PropTypes.array,
  artistInLocation: PropTypes.array,
  setLocation: PropTypes.func,
  fetchApiEvents: PropTypes.func,
  fetchArtist: PropTypes.func,
  setArtistInLocation: PropTypes.func,
  match: PropTypes.object
};