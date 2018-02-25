import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect, Route } from 'react-router';
import Home from '../../components/Home/Home.js';
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
      suggestedWords: [],
      redirect: false
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

    this.setState({
      //suggestedWords: this.searchComplete.suggest(inputVal),
      inputVal
    });
    match.path === '/' ? 
      setLocation(inputVal) && this.callFetch() : null;
  }

  submitHandler = async(e) => {
    e.preventDefault();
    const { path } = this.props.match;
    await this.callFetch();

    path === '/artists' ? await this.setFavoriteArtists() : null;
    this.setLocalStorage();
    this.setState({
      inputVal: '',
      redirect: true
    });
  }

  callFetch = async() => {
    const { inputVal } = this.state;
    const { location, fetchApiEvents, fetchArtist, match } = this.props;
    
    return match.path === '/' ?
      await fetchApiEvents(locationObj[location]) : await fetchArtist(inputVal);
  }

  setFavoriteArtists = async() => {
    const { location, allArtistEvents, setArtistInLocation } = this.props;
    const splitLocation = location.split(', ');

    let matchLocation = await allArtistEvents.filter(artist => {
      return artist.state === splitLocation[1];
    });
 
    setArtistInLocation(matchLocation);
  }

  setLocalStorage = () => {
    const { location, match, artistInLocation } = this.props;
    
    match.path === '/' ?
      localStorage.setItem('location', location)
      :
      localStorage.setItem('favArtists', JSON.stringify(artistInLocation));
  }

  render () {
    const { redirect } = this.state;
    const { path } = this.props.match;

    if (redirect === true && path !== '/artists') {
      return <Redirect to='/home' />; 
    }
    
    return (
      <div>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <input
            onChange={(e) => this.inputHandler(e)} 
            type='text'
            placeholder='Enter a location'
            value={this.state.inputVal}
          />
            {/* <datalist id="suggestions">
              {
                this.state.suggestedWords.slice(0, 5).map(word => {
                  return (<option value={word}>hi</option>);
                })
              }
            </datalist> */}
          
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