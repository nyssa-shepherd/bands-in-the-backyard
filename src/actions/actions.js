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

export const fetchArtist = artistName => async (dispatch) => {
  const artist = await fetchArtistApi(artistName);
  return dispatch(addArtist(artist));
};

export const addArtist = artists => ({
  type: 'ADD_ARTIST',
  artists
});