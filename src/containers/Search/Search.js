import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import './Search.css';
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
  
    const suggestedWords = match.path !== '/artists' ?
      this.searchComplete.suggest(inputVal)
      : null;
     console.log(suggestedWords); 
    this.setState({
      suggestedWords,
      inputVal
    });

    match.path !== '/artists' ? 
      setLocation(inputVal) && this.callFetch() : null;
  }

  submitHandler = async(e) => {
    e.preventDefault();
    const { match, setFavoriteArtists } = this.props;
    await this.callFetch();

    match.path === '/artists' ? await setFavoriteArtists() : null;
    this.setLocalStorage();
    this.setState({
      inputVal: '',
      redirect: true
    });
  }

  callFetch = async() => {
    const { inputVal } = this.state;
    const { location, fetchApiEvents, fetchArtist, match } = this.props;
    
    return match.path === '/artists' ?
      await fetchArtist(inputVal) : await fetchApiEvents(locationObj[location]);
  }

  setLocalStorage = () => {
    const { location, match, artistInLocation } = this.props;
    
    match.path === '/artists' ?
      localStorage.setItem('favArtists', JSON.stringify(artistInLocation))
      :
      localStorage.setItem('location', location);

  }

  render () {
    const { redirect, suggestedWords, inputVal } = this.state;
    const { path } = this.props.match;

    if (redirect === true && path === '/') {
      return <Redirect to='/home' />; 
    }
    
    return (
      <div>
        <form onSubmit={(e) => this.submitHandler(e)}>
          <div className='search'>
            <input
              onChange={(e) => this.inputHandler(e)} 
              type='text'
              placeholder='Enter a location'
              value={inputVal}
            />
            <button>search</button>
          </div>
          {
            path !== '/artists' &&
            <div className='list'>
              <datalist id="suggestions">
                {
                  suggestedWords.slice(0, 5).map((word, i) => {
                    return (<option value={word} key={i}>{word}</option>);
                  })
                }
              </datalist>
            </div>
          }
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