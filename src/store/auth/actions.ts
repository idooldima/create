import { createAction } from 'redux-act';
import { ErrorType } from '../types';
import { Credentials, User } from './types';

export const signInStart = createAction<Credentials>('SIGN_IN_START');
export const signInSuccess = createAction<User>('SIGN_IN_SUCCESS');
export const signInError = createAction<ErrorType>('SIGN_IN_ERROR');

export const signUpStart = createAction<Credentials>('SIGN_UP_START');
export const signUpSuccess = createAction<User>('SIGN_UP_SUCCESS');
export const signUpError = createAction<ErrorType>('SIGN_UP_ERROR');

export const refreshTokenStart = createAction('REFRESH_TOKEN_START');
export const refreshTokenSucess = createAction<User>('REFRESH_TOKEN_SUCCESS');
export const refreshTokenError = createAction<ErrorType>('REFRESH_TOKEN_ERROR');

export const logout = createAction('LOGOUT');
