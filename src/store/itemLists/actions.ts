import { createAction } from 'redux-act';
import { ErrorType } from '../types';
import { ItemsTypes, ItemType } from './types';

export const addItemStart = createAction<ItemType>('ADD_ITEM_START');
export const addItemSuccess = createAction<ItemType>('ADD_ITEM_SUCCESs');
export const addItemError = createAction<ErrorType>('ADD_ITEM_ERROR');

export const deleteListItemSart = createAction<string>('DELTE_LIST_ITEM');
export const deleteListItemSuccess = createAction<ItemsTypes>('DELTE_LIST_SUCCESs');
export const deleteListItemError = createAction<ErrorType>('DELTE_LIST_ERROR');
