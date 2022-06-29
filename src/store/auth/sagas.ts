import { SagaIterator } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  signInError,
  signInStart,
  signInSuccess,
  signUpStart,
  signUpSuccess,
  signUpError,
  logout,
  refreshTokenStart,
  refreshTokenError,
  refreshTokenSucess,
} from './actions';
import { SagaActionType } from '../types';
import { Credentials } from './types';
import axios from '../../api';
import { setSessionStorage } from '../../lib';
import { currentUserSelector } from './selectors';

export const signInSaga = function* ({
  payload: { email, password, navigate },
}: SagaActionType<Credentials>): SagaIterator {
  try {
    const result = yield call(axios.post, 'login', {
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
    const result = yield call(axios.post, 'registration', {
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

export const refreshTokenSaga = function* (): SagaIterator {
  try {
    const user = yield select(currentUserSelector);
    const result = yield call(axios.post, 'refresh', { refreshToken: user.refreshToken });
    console.log(result);
    yield put(refreshTokenSucess(result.data));
    setSessionStorage('currentUser', result.data);
  } catch (error: any) {
    yield put(refreshTokenError(error));
  }
};

export default function* root() {
  yield takeLatest(signInStart, signInSaga);
  yield takeLatest(signUpStart, signUpSaga);
  yield takeLatest(logout, logoutSaga);
  yield takeLatest(refreshTokenStart, refreshTokenSaga);
}
