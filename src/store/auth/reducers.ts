import { createReducer } from 'redux-act';
import initialState from './state';
import {
  signInStart,
  signInSuccess,
  signInError,
  signUpStart,
  signUpSuccess,
  signUpError,
  logout,
  refreshTokenStart,
  refreshTokenSucess,
  refreshTokenError,
} from './actions';
import { AuthStateType, User } from './types';
import { ErrorType } from '../types';

export const onSignInStart = (state: AuthStateType) => ({
  ...state,
  isLoading: true,
});

export const onSignInSuccess = (state: AuthStateType, payload: User) => ({
  ...state,
  currentUser: payload,
  isLoading: false,
});

export const onSignInError = (state: AuthStateType, payload: ErrorType) => ({
  ...initialState,
  error: payload,
});

export const onSignUpStart = (state: AuthStateType) => ({
  ...state,
  isLoading: true,
});

export const onSignUpSuccess = (state: AuthStateType, payload: User) => ({
  ...state,
  currentUser: payload,
  isLoading: false,
});

export const onSignUpError = (state: AuthStateType, payload: ErrorType) => ({
  ...initialState,
  error: payload,
});

export const onLogout = () => ({
  ...initialState,
});

export const onRefreshTokenStart = (state: AuthStateType) => ({
  ...state,
});
export const onRefreshTokenSuccess = (state: AuthStateType, payload: User) => ({
  ...state,
  currentUser: payload,
});
export const onRefreshTokenError = (state: AuthStateType) => ({
  ...state,
});

export const authReducer = createReducer<AuthStateType>({}, initialState)
  .on(signInStart, onSignInStart)
  .on(signInSuccess, onSignInSuccess)
  .on(signInError, onSignInError)
  .on(signUpStart, onSignUpStart)
  .on(signUpSuccess, onSignUpSuccess)
  .on(signUpError, onSignUpError)
  .on(logout, onLogout)
  .on(refreshTokenStart, onRefreshTokenStart)
  .on(refreshTokenSucess, onRefreshTokenSuccess)
  .on(refreshTokenError, onRefreshTokenError);

export default authReducer;
