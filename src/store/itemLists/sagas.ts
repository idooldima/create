import { SagaIterator } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { addItemError, addItemStart, addItemSucces } from './actions';
import { SagaActionType } from '../types';
import axios from 'axios';
import { ItemType } from './types';

export const itemListSaga = function* ({
    payload
}: SagaActionType<ItemType>): SagaIterator {
    try {
        const result = yield call(axios.post, 'https://your-list-app.herokuapp.com/api/list', payload, {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlkb29sZGltYUBnbWFpbC5jb20iLCJpZCI6IjYyYjJjZTA3MjJlOGU2NDk2ZGUzZTY5OCIsImlhdCI6MTY1NTk5MjM4MywiZXhwIjoxNjU1OTk0MTgzfQ.0VHSo48_r1QcChEpajFmF6Q1AdyQYmFLv4Qe2bMDEjU",
            }
        })
        yield put(addItemSucces(result.data));
    } catch (error: any) {
        yield put(addItemError(error))
    }
}

export default function* root() {
    yield takeLatest(addItemStart, itemListSaga)
}