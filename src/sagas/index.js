import { all } from 'redux-saga/effects';
import { offersActionWatcher } from './offers'
import { authenticationActionWatcher } from './authentication'

export default function* rootSaga() {
  yield all([
    offersActionWatcher(),
    authenticationActionWatcher(),
  ]);
}
