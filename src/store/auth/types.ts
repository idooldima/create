import { NavigateFunction } from 'react-router-dom';
import { ErrorType } from '../types';

export type Credentials = {
  email: string;
  password: string;
  navigate: NavigateFunction;
};

export type User = {
  accessToken: string;
  refreshToken: string;
  user: {
  email: string;
    id: string;
  }
};

export type AuthStateType = {
  currentUser: User | null;
  isLoading: boolean;
  error: ErrorType | null;
};
