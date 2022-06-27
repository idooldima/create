import { SagaIterator } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  addItemError,
  addItemStart,
  addItemSuccess,
  deleteListItemError,
  deleteListItemStart,
  deleteListItemSuccess,
  editListItemError,
  editListItemStart,
  editListItemSuccess,
} from './actions';
import { SagaActionType } from '../types';
import axios from 'axios';
import { ItemsTypes, ItemType } from './types';
import { itemListSelector } from './selectors';
import { currentUserSelector } from '../auth/selectors';

export const itemListSaga = function* ({ payload }: SagaActionType<ItemType>): SagaIterator {
  try {
    const user = yield select(currentUserSelector);
    const result = yield call(
      axios.post,
      'https://your-list-app.herokuapp.com/api/list',
      { ...payload },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    yield put(addItemSuccess(result.data.listData));
  } catch (error: any) {
    yield put(addItemError(error));
  }
};

export const deleteListItemSaga = function* ({ payload }: SagaActionType<string>): SagaIterator {
  try {
    const user = yield select(currentUserSelector);
    const items = yield select(itemListSelector);
    const result = yield call(
      axios.delete,
      `https://your-list-app.herokuapp.com/api/list/${payload}`,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    const newItems = items.filter((item: ItemType) => item._id !== payload);
    yield put(deleteListItemSuccess(newItems));
  } catch (error: any) {
    yield put(deleteListItemError(error));
  }
};

export const editListItemSaga = function* ({ payload }: SagaActionType<ItemType>): SagaIterator {
  try {
    const user = yield select(currentUserSelector);
    const items = yield select(itemListSelector);
    const result = yield call(
      axios.put,
      `https://your-list-app.herokuapp.com/api/list/${payload._id}`,
      { ...payload },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    const newItems = items.map((item: ItemType) => (item._id === payload._id) ? payload : item)
    console.log(payload, newItems, items)
    yield put(editListItemSuccess(newItems));
  } catch (error: any) {
    yield put(editListItemError(error));
  }
};

export default function* root() {
  yield takeLatest(addItemStart, itemListSaga);
  yield takeLatest(deleteListItemStart, deleteListItemSaga);
  yield takeLatest(editListItemStart, editListItemSaga)
}
