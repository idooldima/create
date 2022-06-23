import { createAction } from 'redux-act';
import { ModalTypes } from './types';

export const openModal = createAction<ModalTypes>('OPEN_MODAL');
export const closeModal = createAction<ModalTypes>('CLOSE_MODAL');
