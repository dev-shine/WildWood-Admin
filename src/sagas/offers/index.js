import { select, put, takeLatest, call } from 'redux-saga/effects';
import {
  fetchDataService,
  deleteDataService,
  postDataService,
} from '../../actions/apis'
import {
  FETCH_OFFERS,
  OFFERS_RECEIVED,
  DELETE_OFFER,
  OFFER_DELETED,
  INSERT_OFFER,
  OFFER_INSERTED,
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

function* insertOffer(action) {
  const state = yield select()
  const response = yield postDataService('/offers', action.offer, state.authentication.header)
  yield put({ type: OFFER_INSERTED, offer: response.data})
  yield call(fetchOffers)
}
export function* offersActionWatcher() {
    yield takeLatest( FETCH_OFFERS, fetchOffers)
    yield takeLatest( DELETE_OFFER, deleteOffer)
    yield takeLatest( INSERT_OFFER, insertOffer)
}