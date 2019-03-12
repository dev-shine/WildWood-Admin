import { select, put, takeLatest } from 'redux-saga/effects';
import {
  postDataService,
} from '../../actions/apis'
import {
  SIGNIN,
  SIGNUP,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
} from '../../constants/actionTypes'

function* signIn( action ) {
  const state = yield select()
  const response = yield postDataService('/users/login', action.user, state.authentication.header)
  yield put({ type: SIGNIN_SUCCESS, response, });
}

function* signUp() {
  const state = yield select()
  const response = yield postDataService('/users', state.authentication.header)
  yield put({ type: SIGNIN_SUCCESS, user: response.data, });
}

export function* authenticationActionWatcher() {
    yield takeLatest( SIGNIN, signIn)
}