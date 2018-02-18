import {fetchApi }from '../components/apiCall/apiCall.js';

export const fetchApiData = (locationKey) => async (dispatch) => {
  const events = await fetchApi(locationKey);
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