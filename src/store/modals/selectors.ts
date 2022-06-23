import { ReduxStoreType } from '../types';
import { ModalTypes } from './types';

export const isOpenModal =
  (type: ModalTypes) =>
  (state: ReduxStoreType): boolean =>
    state.modals[type];
