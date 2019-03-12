import { select, put, takeLatest } from 'redux-saga/effects';
import {
  fetchDataService,
} from '../../actions/apis'
import {
  FETCH_USERS,
  USERS_RECEIVED,
} from '../../constants/actionTypes'

function* fetchUsers() {
  const state = yield select()
  const response = yield fetchDataService('/users', state.authentication.header)
  yield put({ type: USERS_RECEIVED, users: response.data, });
}

export function* usersActionWatcher() {
    yield takeLatest( FETCH_USERS, fetchUsers)
}