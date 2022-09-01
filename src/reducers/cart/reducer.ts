import { ActionTypes } from "./actions";
import { produce } from 'immer'
import { Coffee } from "phosphor-react";

export interface Coffee {
  id: string;
  name: string;
  qtd: number;
  price:string | any;
} 

interface CoffeeState {
  coffees: Coffee[]
  coffeeId: string | null
}

export function cartReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_QTD_ITEM: {
      const cartItemIndex = state.coffees.findIndex((Coffee) => {
        return Coffee.id === state.coffeeId
      })
      return produce(state, draft => {
        draft.coffees[cartItemIndex].qtd += 1
      })
    }
    case ActionTypes.SUB_QTD_ITEM: {
      const cartItemIndex = state.coffees.findIndex((Coffee) => {
        return Coffee.id === state.coffeeId
      })
      return produce(state, draft => {
        if (draft.coffees[cartItemIndex].qtd > 1) {
          draft.coffees[cartItemIndex].qtd -= 1
        }
      })
    }
    case ActionTypes.REM_ITEM: {
      const cartItemIndex = state.coffees.findIndex((Coffee) => {
        return Coffee.id === state.coffeeId
      })
      return produce(state, draft => {
        draft.coffees.splice(cartItemIndex)
      })
    }
    case ActionTypes.ADD_ITEM: {
      return produce(state, draft => {
        draft.coffees.push(action.payload.newItem)
        // draft.coffeeId = action.payload.newItem.id
      })
    }
    default:
      return state
  }
}