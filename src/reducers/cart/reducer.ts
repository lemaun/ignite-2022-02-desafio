import { ActionTypes } from "./actions";
import { produce } from 'immer'
import { coffeeList } from "../../contexts/CartContext";

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
  image: string
  name: string
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
      const coffeeItemIndex = coffeeList.findIndex((Coffee) => {
        return Coffee.id === action.payload.coffeeId
      })
      
      return produce(state, draft => {
        draft.cartList[cartItemIndex].qtd += 1
        draft.cartList[cartItemIndex].value = draft.cartList[cartItemIndex].qtd * coffeeList[coffeeItemIndex].price
      })
    }
    case ActionTypes.SUB_QTD_ITEM: {
      const cartItemIndex = state.cartList.findIndex((Coffee) => {
        return Coffee.coffeeId === action.payload.coffeeId
      })
      const coffeeItemIndex = coffeeList.findIndex((Coffee) => {
        return Coffee.id === action.payload.coffeeId
      })
      return produce(state, draft => {
        if (draft.cartList[cartItemIndex].qtd > 1) {
          draft.cartList[cartItemIndex].qtd -= 1
          draft.cartList[cartItemIndex].value = draft.cartList[cartItemIndex].qtd * coffeeList[coffeeItemIndex].price
        }
      })
    }
    case ActionTypes.REM_ITEM: {
      const cartItemIndex = state.cartList.findIndex((Coffee) => {
        return Coffee.coffeeId === action.payload.coffeeId
      })
      return produce(state, draft => {
        draft.cartList.splice(cartItemIndex, 1)
      })
    }
    case ActionTypes.ADD_ITEM: {
      const cartItemIndex = state.cartList.findIndex((Coffee) => {
        return Coffee.coffeeId === action.payload.newItem.coffeeId
      })
      return produce(state, draft => {
        if (cartItemIndex < 0) {
          draft.cartList.push(action.payload.newItem)
        } else {
          draft.cartList[cartItemIndex].qtd += action.payload.newItem.qtd
          draft.cartList[cartItemIndex].value += action.payload.newItem.value
        }
      })
    }
    default:
      return state
  }
}