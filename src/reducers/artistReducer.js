export const artistReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_ARTIST':
  console.log(action)
    return [...state, action.artists];
  default:
    return state;
  }
};