import { put, takeLatest, all } from 'redux-saga/effects';
import {
  fetchDataService,
} from '../actions/apis'
import {
  FETCH_OFFERS,
  OFFERS_RECEIVED,
} from '../constants/actionTypes'

function* fetchOffers() {
  const response = yield fetchDataService('/offers', { authorization: 'Bearer'})
  yield put({ type: OFFERS_RECEIVED, offers: response.data, });
}

function* actionWatcher() {
     yield takeLatest( FETCH_OFFERS, fetchOffers)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}