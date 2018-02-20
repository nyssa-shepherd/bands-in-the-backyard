import apiKey from './apiKey.js';

export const fetchEventApi = async(locationKey) => {
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

export const fetchArtistApi = async(artistName) => {
  try {
    const initialFetch = await fetch(`https://rest.bandsintown.com/artists/${artistName}/events?app_id=dasfdfsda`);
    const data = await initialFetch.json();
    return cleanArtistData(data);
  } catch (err) {
    throw Error;
  }
};

export const cleanArtistData = artistArray => {
  const cleanData = artistArray.map(async artist => {
    return await {
      name: artist.lineup[0],
      city: artist.venue.city,
      state: artist.venue.region,
      date: artist.datetime,
      venue: artist.venue.name
      //ticketUrl: artist.offers[0].url
    };
  });
  return Promise.all(cleanData);
};


