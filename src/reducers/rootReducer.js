import { combineReducers } from 'redux';
import { eventReducer } from './eventReducer.js';

const rootReducer = combineReducers({
    events: eventReducer
});

export default rootReducer;