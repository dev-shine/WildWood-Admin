import { select, put, takeLatest, call } from 'redux-saga/effects';
import {
  fetchDataService,
  deleteDataService,
} from '../../actions/apis'
import {
  FETCH_OFFERS,
  OFFERS_RECEIVED,
  DELETE_OFFER,
  OFFER_DELETED,
} from '../../constants/actionTypes'

function* fetchOffers() {
  const state = yield select()
  const response = yield fetchDataService('/offers', state.authentication.header)
  yield put({ type: OFFERS_RECEIVED, offers: response.data, });
}

function* deleteOffer(action) {
  const state = yield select()
  const response = yield deleteDataService('/offers/' + action.id, state.authentication.header)
  yield put({ type: OFFER_DELETED, count: response.count})
  yield call(fetchOffers)
}

export function* offersActionWatcher() {
    yield takeLatest( FETCH_OFFERS, fetchOffers)
    yield takeLatest( DELETE_OFFER, deleteOffer)
}