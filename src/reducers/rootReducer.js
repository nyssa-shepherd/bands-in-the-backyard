import { combineReducers } from 'redux';
import { eventReducer } from './eventReducer.js';
import { locationReducer } from './locationReducer.js';
import { artistReducer, artistInLocationReducer } from './artistReducer.js';

const rootReducer = combineReducers({
  events: eventReducer,
  location: locationReducer,
  allArtistEvents: artistReducer,
  artistInLocation: artistInLocationReducer
});

export default rootReducer;