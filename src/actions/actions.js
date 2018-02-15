import fetchApi from '../components/apiCall/apiCall.js';

export const fetchApiData = () => async (dispatch) => {
  const events = await fetchApi();
  return dispatch(addEvents(events));
};

export const addEvents = events => ({
  type: 'ADD_EVENTS',
  events
});