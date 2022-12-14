import { CoffeeCart } from "./reducer"


export enum ActionTypes {
  ADD_QTD_ITEM = 'ADD_QTD_ITEM',
  SUB_QTD_ITEM = 'SUB_QTD_ITEM',
  ADD_ITEM = 'ADD_ITEM',
  REM_ITEM = 'REM_ITEM',
  CLEAN_CART = 'CLEAN_CART',
}

export function addQuantCartItemAction(coffeeId: string) {
  return {
    type: ActionTypes.ADD_QTD_ITEM,
    payload: {
      coffeeId,
    }
  }
}

export function subQuantCartItemAction(coffeeId: string) {
  return {
    type: ActionTypes.SUB_QTD_ITEM,
    payload: {
      coffeeId,
    }
  }
}

export function remCartItemAction(coffeeId: string) {
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

export function cleanCartAction() {
  return {
    type: ActionTypes.CLEAN_CART,
  }
}
