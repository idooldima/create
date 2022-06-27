import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  signInError,
  signInStart,
  signInSuccess,
  signUpStart,
  signUpSuccess,
  signUpError,
  logout,
} from './actions';
import { SagaActionType } from '../types';
import { Credentials, User } from './types';
import axios from 'axios';
import { setSessionStorage } from '../../lib';

export const signInSaga = function* ({
  payload: { email, password, navigate },
}: SagaActionType<Credentials>): SagaIterator {
  try {
    const result = yield call(axios.post, 'https://your-list-app.herokuapp.com/api/login', {
      email,
      password,
    });
    yield put(signInSuccess(result.data));
    setSessionStorage('currentUser', result.data);
    navigate('/main');
  } catch (error: any) {
    yield put(signInError(error));
  }
};

export const signUpSaga = function* ({
  payload: { email, password, navigate },
}: SagaActionType<Credentials>): SagaIterator {
  try {
    const result = yield call(axios.post, 'https://your-list-app.herokuapp.com/api/registration', {
      email,
      password,
    });
    yield put(signUpSuccess(result.data));
    setSessionStorage('currentUser', result.data);
    navigate('/main');
  } catch (error: any) {
    yield put(signUpError(error));
  }
};

export const logoutSaga = function* () {
  yield call(setSessionStorage, 'currentUser', null);
};

export default function* root() {
  yield takeLatest(signInStart, signInSaga);
  yield takeLatest(signUpStart, signUpSaga);
  yield takeLatest(logout, logoutSaga);
}
