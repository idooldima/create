import { createReducer } from 'redux-act';
import { Modal, ModalTypes } from './types';
import initialState from './state';
import { closeModal, openModal } from './actions';

export const onOpenModal = (state: Modal, payload: ModalTypes) => ({
  ...state,
  [payload]: true,
});

export const oncloseModal = (state: Modal, payload: ModalTypes) => ({
  ...state,
  [payload]: false,
});

export const modalReducer = createReducer<Modal>({}, initialState)
  .on(openModal, onOpenModal)
  .on(closeModal, oncloseModal);

export default modalReducer;
