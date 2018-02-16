import apiKey from './apiKey.js';

const fetchApi = async(locationKey) => {
  try {
    const initialFetch = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=${locationKey}&apikey=${apiKey}`
    );
    const data = await initialFetch.json();
    return cleanData(data._embedded.events);
  } catch (error) {
    throw Error;
  }
};

const cleanData = eventArray => {
  const cleanData =  eventArray.map(async event => {
    return await {
      name: event.name,
      city: event._embedded.venues[0].city.name,
      state: event._embedded.venues[0].state.name,
      venue: event._embedded.venues[0].name,
      ticketUrl: event._embedded.venues[0].url
    }
  });
  return Promise.all(cleanData);
};

export default fetchApi;
