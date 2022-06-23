import { ErrorType } from "../types";
import { ItemStateType, ItemType } from "./types";
import initialState from './state';
import { createReducer } from "redux-act";
import { addItemError, addItemStart, addItemSucces } from "./actions";

export const onAddItem = (state: ItemStateType) => ({
    ...state,
    isLoading: true,
})

export const onAddItemSucces = (state: ItemStateType, payload: ItemType) => ({
    ...state,
    item: payload,
    isLoading: false,
})

export const onAddItemError = (state: ItemStateType, payload: ErrorType) => ({
    ...initialState,
    isLoading: false,
    error: payload,
})

export const ListItemReducer = createReducer<ItemStateType>({}, initialState)
    .on(addItemStart, onAddItem)
    .on(addItemSucces, onAddItemSucces)
    .on(addItemError, onAddItemError)

export default ListItemReducer;
