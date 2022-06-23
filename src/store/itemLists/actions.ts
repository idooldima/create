import { createAction } from "redux-act"
import { ErrorType } from "../types"
import { ItemType } from "./types"

export const addItemStart = createAction<ItemType>('ADD_ITEM_START')
export const addItemSucces = createAction<ItemType>('ADD_ITEM_SUCCES')
export const addItemError = createAction<ErrorType>('ADD_ITEM_ERROR')