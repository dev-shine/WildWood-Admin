import { select, put, takeLatest } from 'redux-saga/effects';
import {
  fetchDataService,
} from '../../actions/apis'
import {
  FETCH_OFFERS,
  OFFERS_RECEIVED,
} from '../../constants/actionTypes'

function* fetchOffers() {
  const state = yield select()
  const response = yield fetchDataService('/offers', state.authentication.header)
  yield put({ type: OFFERS_RECEIVED, offers: response.data, });
}

export function* offersActionWatcher() {
    yield takeLatest( FETCH_OFFERS, fetchOffers)
}