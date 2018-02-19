import { fetchEventApi, fetchArtistApi } from '../components/apiCall/apiCall.js';

export const fetchApiEvents = (locationKey) => async (dispatch) => {
  const events = await fetchEventApi(locationKey);
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

export const fetchArtist = (artistName, location) => async (dispatch) => {
  const artists = await fetchArtistApi(artistName);
  return dispatch(addArtist(artists, location));
};

export const addArtist = allArtistsEvents => ({
  type: 'ADD_ARTIST',
  allArtistsEvents
});

export const setArtistInLocation = artistInLocation => ({
  type: 'SET_ARTIST_IN_LOCATION',
  artistInLocation
});