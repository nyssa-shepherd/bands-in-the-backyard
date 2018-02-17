import apiKey from './apiKey.js';

export const fetchApi = async(locationKey) => {
  try {
    const initialFetch = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=264&apikey=${apiKey}`
    );
    const data = await initialFetch.json();
    return cleanData(data._embedded.events);
  } catch (error) {
    throw Error;
  }
};

export const cleanData = eventArray => {
  const cleanData =  eventArray.map(async event => {
    return await {
      image: event.images[0].url,
      name: event.name,
      city: event._embedded.venues[0].city.name,
      state: event._embedded.venues[0].state.name,
      date: event.dates.start.localDate,
      time: event.dates.start.localTime,
      venue: event._embedded.venues[0].name,
      ticketUrl: event._embedded.venues[0].url
    };
  });
  return Promise.all(cleanData);
};


