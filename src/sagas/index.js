import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../components/apiCall/apiCall.js';
import * as actions from '../actions/actions.js';

export function* addEvents(locationKey) {
  console.log(locationKey);
  try {
    const events = yield call(api.cleanData, locationKey);
    yield put(actions.addEvents(events));
  } catch (err) {
    console.log('err')
  }
}

export function* listenForAddEvents() {
  yield takeLatest('ADD_EVENTS', addEvents);
}

export default listenForAddEvents;