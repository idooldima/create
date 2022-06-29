import axios from "axios";
import store from "../store/store";
import { setSessionStorage } from "../lib";
import { refreshTokenSucess } from "../store/auth/actions";

const axiosApiInstance = axios.create({
    baseURL: 'https://your-list-app.herokuapp.com/api/',
})

axiosApiInstance.interceptors.request.use(async function (config) {
    const token = store.getState().auth.currentUser?.accessToken;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
        const refreshToken = store.getState().auth.currentUser?.refreshToken
        axios.post('https://your-list-app.herokuapp.com/api/refresh', { refreshToken }).then(response => {
            store.dispatch(refreshTokenSucess(response.data))
            setSessionStorage('currentUser', response.data)
        });
    } else {
        config.headers.Authorization = null
    }
    return config
})

export default axiosApiInstance

