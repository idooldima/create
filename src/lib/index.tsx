import { currentUserSelector } from '../store/auth/selectors';
import store from '../store/store';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const loggedIn = useIsUserLoggedIn();
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate('/');
    }
  }, [loggedIn]);
  if (loggedIn) {
    return <>{children}</>;
  }
  return <Navigate to={'/'} />;
};

export const isUserSignedUp = (): boolean => {
  const state = store.getState();
  const user = currentUserSelector(state);
  return !!user && !!user.accessToken;
};

export function useIsUserLoggedIn() {
  const user = useSelector(currentUserSelector);
  return user && !!user.accessToken;
}

export function getSessionStorageData(key: string): any {
  const sessionStorageData = sessionStorage.getItem(key);
  if (sessionStorageData) {
    const data = JSON.parse(sessionStorageData);
    return data;
  }
  return null;
}

export function setSessionStorage(key: string, data: any) {
  if (sessionStorage) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
}
