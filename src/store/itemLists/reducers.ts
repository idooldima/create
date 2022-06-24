import { ErrorType } from '../types';
import { ItemStateType, ItemsTypes, ItemType } from './types';
import initialState from './state';
import { createReducer } from 'redux-act';
import {
  addItemError,
  addItemStart,
  addItemSuccess,
  deleteListItemSart,
  deleteListItemError,
  deleteListItemSuccess,
} from './actions';

export const onAddItem = (state: ItemStateType) => ({
  ...state,
  isLoading: true,
});

export const onAddItemSuccess = (state: ItemStateType, payload: ItemType) => ({
  ...state,
  data: [...state.data, payload],
  isLoading: false,
});

export const onAddItemError = (state: ItemStateType, payload: ErrorType) => ({
  ...initialState,
  isLoading: false,
  error: payload,
});

export const onDeleteItemStart = (state: ItemStateType) => ({
  ...state,
  isLoading: true,
});

export const onDeleteItemSuccess = (state: ItemStateType, payload: ItemsTypes) => ({
  ...state,
  data: payload,
  isLoading: false,
});

export const onDeleteItemError = (tate: ItemStateType, payload: ErrorType) => ({
  ...initialState,
  isLoading: false,
  error: payload,
});

export const ListItemReducer = createReducer<ItemStateType>({}, initialState)
  .on(addItemStart, onAddItem)
  .on(addItemSuccess, onAddItemSuccess)
  .on(addItemError, onAddItemError)
  .on(deleteListItemSart, onDeleteItemStart)
  .on(deleteListItemSuccess, onDeleteItemSuccess)
  .on(deleteListItemError, onDeleteItemError);

export default ListItemReducer;
