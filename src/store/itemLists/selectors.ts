import { ReduxStoreType } from '../types';
import { ItemsTypes } from './types';

export const itemListSelector = (state: ReduxStoreType): ItemsTypes => state.listItem.data;
