import fetchApi from '../components/apiCall/apiCall.js';

export const fetchEventData = () => async (dispatch) => {
  const events = await fetchApi();
  dispatch(addEvents(events));
};

export const addEvents = events => {
  type: 'ADD_EVENTS',
  events;
};