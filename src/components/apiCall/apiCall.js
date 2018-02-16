import apiKey from './apiKey.js';

const fetchApi = async(locationKey) => {
  try {
    const initialFetch = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=${locationKey}&apikey=U4ETwTF4TFZg6APYoRdJsRNYmCCjxRTK`);
    const data = await initialFetch.json();
    return data._embedded.events;
  } catch (error) {
    throw Error;
  }
};

export default fetchApi;
