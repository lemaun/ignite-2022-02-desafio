import { addItemToCart, remCartItem, subQuantCartItem, addQuantCartItem } from "../reducers/cart/actions";
import { Coffee, cartReducer } from "../reducers/cart/reducer";
import { createContext, ReactNode, useEffect, useReducer, useState } from "react";

interface CoffeeContextType {
  cycles: Coffee[]
  coffeeId: string | null
  qtd: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({ children }: CartContextProviderProps) {

}