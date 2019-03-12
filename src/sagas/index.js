import { all } from 'redux-saga/effects';
import { offersActionWatcher } from './offers'
import { authenticationActionWatcher } from './authentication'
import { usersActionWatcher } from './users'

export default function* rootSaga() {
  yield all([
    offersActionWatcher(),
    authenticationActionWatcher(),
    usersActionWatcher(),
  ]);
}
