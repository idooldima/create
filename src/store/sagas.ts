import { all, fork } from 'redux-saga/effects';
import auth from './auth/sagas';
import itemLists from './itemLists/sagas'

export default function* root() {
  yield all([fork(auth)]);
  yield all([fork(itemLists)])
}
