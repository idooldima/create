import { createAction } from 'redux-act';
import { ErrorType } from '../types';
import { ItemsTypes, ItemType } from './types';

export const addItemStart = createAction<ItemType>('ADD_ITEM_START');
export const addItemSuccess = createAction<ItemType>('ADD_ITEM_SUCCESS');
export const addItemError = createAction<ErrorType>('ADD_ITEM_ERROR');

export const deleteListItemStart = createAction<string>('DELETE_LIST_ITEM_START');
export const deleteListItemSuccess = createAction<ItemsTypes>('DELETE_LIST_ITEM_SUCCESS');
export const deleteListItemError = createAction<ErrorType>('DELETE_LIST_ITEM_ERROR');

export const editListItemStart = createAction<ItemType>('EDIT_LIST_ITEM_START');
export const editListItemSuccess = createAction<ItemsTypes>('EDIT_LIST_ITEM_SUCCESS');
export const editListItemError = createAction<ErrorType>('EDIT_LIST_ITEM_ERROR');
