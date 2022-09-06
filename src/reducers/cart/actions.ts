import { CoffeeCart } from "./reducer"


export enum ActionTypes {
  ADD_QTD_ITEM = 'ADD_QTD_ITEM',
  SUB_QTD_ITEM = 'SUB_QTD_ITEM',
  ADD_ITEM = 'ADD_ITEM',
  REM_ITEM = 'REM_ITEM',
}

export function addQuantCartItemAction(coffeeId: number) {
  return {
    type: ActionTypes.ADD_QTD_ITEM,
    payload: {
      coffeeId,
    }
  }
}

export function subQuantCartItemAction(coffeeId: number) {
  return {
    type: ActionTypes.SUB_QTD_ITEM,
    payload: {
      coffeeId,
    }
  }
}

export function remCartItemAction(coffeeId: number) {
  return {
    type: ActionTypes.REM_ITEM,
    payload: {
      coffeeId,
    }
  }
}

export function addItemToCartAction(newItem: CoffeeCart) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      newItem,
    }
  }
}
