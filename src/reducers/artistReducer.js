export const artistReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_ARTIST':
    return [...state, action.artist];
  default:
    return state;
  }
};