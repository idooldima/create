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
import axios from '../../api';
import { ItemsTypes, ItemType } from './types';
import { itemListSelector } from './selectors';
import { currentUserSelector } from '../auth/selectors';

export const itemListSaga = function* ({ payload }: SagaActionType<ItemType>): SagaIterator {
  try {
    const result = yield call(axios.post, 'list', payload);
    yield put(addItemSuccess(result.data.listData));
  } catch (error: any) {
    yield put(addItemError(error));
  }
};

export const deleteListItemSaga = function* ({ payload }: SagaActionType<string>): SagaIterator {
  try {
    const items = yield select(itemListSelector);
    const result = yield call(axios.delete, `list/${payload}`);
    const newItems = items.filter((item: ItemType) => item._id !== payload);
    yield put(deleteListItemSuccess(newItems));
  } catch (error: any) {
    yield put(deleteListItemError(error));
  }
};

export const editListItemSaga = function* ({ payload }: SagaActionType<ItemType>): SagaIterator {
  try {
    const items = yield select(itemListSelector);
    const result = yield call(axios.put, `list/${payload._id}`, payload);
    const newItems = items.map((item: ItemType) => (item._id === payload._id ? payload : item));

    yield put(editListItemSuccess(newItems));
  } catch (error: any) {
    yield put(editListItemError(error));
  }
};

export default function* root() {
  yield takeLatest(addItemStart, itemListSaga);
  yield takeLatest(deleteListItemStart, deleteListItemSaga);
  yield takeLatest(editListItemStart, editListItemSaga);
}
