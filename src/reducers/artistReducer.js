// export const artistReducer = (state = [], action) => {
//   switch (action.type) {
//   case 'ADD_ARTIST':
//     return [...state, ...action.allArtistsEvents];
//   default:
//     return state;
//   }
// };

// export const artistInLocationReducer = (state = [], action) => {
//   switch (action.type) {
//   case 'SET_ARTIST_IN_LOCATION':
//     return Array.from(new Set(action.artistInLocation));
//   default:
//     return state;
//   }
// };