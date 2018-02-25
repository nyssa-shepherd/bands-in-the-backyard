import { cleanData, cleanArtistData } from '../components/apiCall/apiCall.js';

export const fetchApiEvents = (locationKey) => async (dispatch) => {
  const events = await cleanData(locationKey);
  return dispatch(addEvents(events));
};

export const addEvents = events => ({
  type: 'ADD_EVENTS',
  events
});

export const setLocation = location => ({
  type: 'SET_LOCATION',
  location
});

export const fetchArtist = (artistName) => async (dispatch) => {
  const artists = await cleanArtistData(artistName);
  return dispatch(addArtist(artists));
};


export const addArtist = allArtistsEvents => ({
  type: 'ADD_ARTIST',
  allArtistsEvents
});

export const setArtistInLocation = artistInLocation => ({
  type: 'SET_ARTIST_IN_LOCATION',
  artistInLocation
});