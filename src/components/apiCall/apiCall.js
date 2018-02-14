import apiKey from './apiKey.js';

const fetchApi = async() => {
  const initialFetch = await fetch(`https://rest.bandsintown.com/artists/maroon5/events?app_id=324323`);
  const data = await initialFetch.json();
  console.log(data)
}

export default fetchApi;