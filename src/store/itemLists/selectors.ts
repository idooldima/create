import { filter } from 'lodash';
import { ReduxStoreType } from '../types';
import { ItemsTypes } from './types';

export const itemListSelector = (state: ReduxStoreType): ItemsTypes => state.listItem.data;

export const filteredItemListSelector =
  (keyWord: string, isFavorite?: boolean) =>
  (state: ReduxStoreType): ItemsTypes =>
    filter(state.listItem.data, (item) => {
      if (isFavorite === undefined) {
        return item.listTitle.includes(keyWord);
      }
      return item.listTitle.includes(keyWord) && item.isFavorites === isFavorite;
    });
