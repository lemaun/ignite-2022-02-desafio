
import { Coffee } from "./reducer"

export enum ActionTypes {
  ADD_QTD_ITEM = 'ADD_QTD_ITEM',
  SUB_QTD_ITEM = 'SUB_QTD_ITEM',
  ADD_ITEM = 'ADD_ITEM',
  REM_ITEM = 'REM_ITEM',
}

export function addQuantCartItem() {
  return {
    type: ActionTypes.ADD_QTD_ITEM,
  }
}

export function subQuantCartItem() {
  return {
    type: ActionTypes.SUB_QTD_ITEM,
  }
}

export function remCartItem() {
  return {
    type: ActionTypes.REM_ITEM,
  }
}

export function addItemToCart(newItem: Coffee) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      newItem,
    }
  }
}
