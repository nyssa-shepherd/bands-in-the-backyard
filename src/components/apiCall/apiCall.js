import apiKey from './apiKey.js';

const fetchApi = async() => {
  try {
    const initialFetch = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=U4ETwTF4TFZg6APYoRdJsRNYmCCjxRTK`);
    const data = await initialFetch.json();
    return data._embedded.events;
  } catch (error) {
    throw Error;
  }
};

export default fetchApi;

// export function itemsFetchData() {
//   return (dispatch) => {
//       dispatch(itemsIsLoading(true));

//       fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=U4ETwTF4TFZg6APYoRdJsRNYmCCjxRTK`)
//           .then((response) => {
//               if (!response.ok) {
//                   throw Error(response.statusText);
//               }

//               dispatch(itemsIsLoading(false));

//               return response;
//           })
//           .then((response) => response.json())
//           .then((items) => dispatch(itemsFetchDataSuccess(items)))
//           .catch(() => dispatch(itemsHasErrored(true)));
//   };
// }