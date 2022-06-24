import { currentUserSelector } from '../store/auth/selectors';
import store from '../store/store';

export const isUserSignedUp = (): boolean => {
    const state = store.getState();
    const user = currentUserSelector(state);
    return !!user && !!user.accessToken;
};

export function isUserLoggedIn() {
    const state = store.getState();
    const user = currentUserSelector(state);
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
