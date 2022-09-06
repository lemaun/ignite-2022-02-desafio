import { ActionTypes } from "./actions";
import { produce } from 'immer'

export interface Coffee{
  id: string;
  name: string;
  type: string;
  typeduo?: string;
  typetrio?: string;
  description: string,
  image: string | any;
  price:number | any;
}

export interface CoffeeCart {
  coffeeId: string
  qtd: number
  value: number
}
interface CoffeeState {
  cartList: CoffeeCart[]
}

export function cartReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_QTD_ITEM: {
      const cartItemIndex = state.cartList.findIndex((Coffee) => {
        return Coffee.coffeeId === action.payload.coffeeId
      })
      return produce(state, draft => {
        draft.cartList[cartItemIndex].qtd += 1
      })
    }
    case ActionTypes.SUB_QTD_ITEM: {
      const cartItemIndex = state.cartList.findIndex((Coffee) => {
        return Coffee.coffeeId === action.payload.coffeeId
      })
      return produce(state, draft => {
        if (draft.cartList[cartItemIndex].qtd > 1) {
          draft.cartList[cartItemIndex].qtd -= 1
        }
      })
    }
    case ActionTypes.REM_ITEM: {
      const cartItemIndex = state.cartList.findIndex((Coffee) => {
        return Coffee.coffeeId === action.payload.coffeeId
      })
      return produce(state, draft => {
        draft.cartList.splice(cartItemIndex)
      })
    }
    case ActionTypes.ADD_ITEM: {
      return produce(state, draft => {
        draft.cartList.push(action.payload.newItem)
        // draft.coffeeId = action.payload.newItem.id
      })
    }
    default:
      return state
  }
}