import apiKey from './apiKey.js';

const fetchApi = async() => {
  try {
    const initialFetch = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=${apiKey}`);
    const data = await initialFetch.json();
    return data._embedded.events;
  } catch (error) {
    throw Error;
  }
};

export default fetchApi;