import { addItemToCartAction, remCartItemAction, subQuantCartItemAction, addQuantCartItemAction } from "../reducers/cart/actions"
import { cartReducer, CoffeeCart } from "../reducers/cart/reducer"
import { createContext, ReactNode, useEffect, useReducer } from "react"
import {v4 as uuidv4} from 'uuid'


import Coffee1 from '../assets/images/Expresso.png'
import Coffee2 from '../assets/images/Americano.png'
import Coffee3 from '../assets/images/ExpressoCremoso.png'
import Coffee4 from '../assets/images/CafeGelado.png'
import Coffee5 from '../assets/images/CafecomLeite.png'
import Coffee6 from '../assets/images/Latte.png'
import Coffee7 from '../assets/images/Capuccino.png'
import Coffee8 from '../assets/images/Macchiato.png'
import Coffee9 from '../assets/images/Mochaccino.png'
import Coffee10 from '../assets/images/ChocolateQuente.png'
import Coffee11 from '../assets/images/Cubano.png'
import Coffee12 from '../assets/images/Havaiano.png'
import Coffee13 from '../assets/images/Arabe.png'
import Coffee14 from '../assets/images/Irlandes.png'

interface NewItemData {
  coffeeId: string
  qtd: number
}
interface CoffeeContextType {
  // coffees: Coffee[]
  cartList: CoffeeCart[]
  subQuantCartItem: (coffeeId:number) => void
  addQuantCartItem: (coffeeId:number) => void
  remCartItem: (coffeeId:number) => void
  addCartItem: (id: string, qtd: number) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CoffeeContextType)
export const coffeeList = [
  {
      id:uuidv4(),
      image:Coffee1,
      name:"Expresso Tradicional",
      type:"TRADICIONAL",
      amount:0,
      price:9.90,
      description:"O tradicional café feito com água quente e grãos moídos"

  },
  {
      id:uuidv4(),
      image:Coffee2,
      name:"Expresso Americano",
      type:"TRADICIONAL",
      amount:0,
      price:9.90,
      description:"Expresso diluído, menos intenso que o tradicional"

  },
  {
      id:uuidv4(),
      image:Coffee3,
      name:"Expresso Cremoso",
      type:"TRADICIONAL",
      amount:0,
      price:9.90,
      description:"Café expresso tradicional com espuma cremosa"

  },
  {
      id:uuidv4(),
      image:Coffee4,
      name:"Expresso Gelado",
      type:"TRADICIONAL",
      typeduo:"GELADO",
      amount:0,
      price:9.90,
      description:"Bebida preparada com café expresso e cubos de gelo"

  },
  {
      id:uuidv4(),
      image:Coffee5,
      name:"Café com Leite",
      type:"TRADICIONAL",
      typeduo:"COM LEITE",
      amount:0,
      price:9.90,
      description:"Meio a meio de expresso tradicional com leite vaporizado"

  },
  {
      id:uuidv4(),
      image:Coffee6,
      name:"Latte",
      typeduo:"COM LEITE",
      type:"TRADICIONAL",
      price:9.90,
      description:"Uma dose de café expresso com o dobro de leite e espuma cremosa"

  },
  {
      id:uuidv4(),
      image:Coffee7,
      name:"Capuccino",
      typeduo:"COM LEITE",
      type:"TRADICIONAL",
      price:9.90,
      description:"Bebida com canela feita de doses iguais de café, leite e espuma"

  },
  {
      id:uuidv4(),
      image:Coffee8,
      name:"Macchiato",
      typeduo:"COM LEITE",
      type:"TRADICIONAL",
      price:9.90,
      description:"Café expresso misturado com um pouco de leite quente e espuma"

  },
  {
      id:uuidv4(),
      image:Coffee9,
      name:"Mocaccino",
      typeduo:"COM LEITE",
      type:"TRADICIONAL",
      price:9.90,
      description:"Café expresso com calda de chocolate, pouco leite e espuma"

  },
  {
      id:uuidv4(),
      image:Coffee10,
      name:"Chocolate Quente",
      type:"COM LEITE",
      typeduo:"ESPECIAL",
      price:9.90,
      description:"Bebida feita com chocolate dissolvido no leite quente e café"

  },
  {
      id:uuidv4(),
      image:Coffee11,
      name:"Cubano",
      typeduo:"ALCOÓLICO",
      typetrio:"GELADO",
      price:9.90,
      type:"ESPECIAL",
      description:"Drink gelado de café expresso com rum, creme de leite e hortelã"

  },{
      id:uuidv4(),
      image:Coffee12,
      name:"Havaiano",
      type:"ESPECIAL",
      price:9.90,
      description:"Bebida adocicada preparada com café e leite de coco"

  },{
      id:uuidv4(),
      image:Coffee13,
      name:"Árabe",
      type:"ESPECIAL",
      price:9.90,
      description:"Bebida preparada com grãos de café árabe e especiarias"

  },{
      id:uuidv4(),
      image:Coffee14,
      name:"Irlandês",
      type:"ESPECIAL",
      price:9.90,
      typeduo:'ALCOÓLICO',
      description:"Bebida a base de café, uísque irlandês, açúcar e chantilly"

  },
]

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cartList: [] },
    () => {
      const storedStateAsJSON = localStorage.getItem('@coffee-shop:cart-state-1.0.0',)

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return {
        cartList: []
      }
    }
  )


  
  const { cartList }  = cartState


  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)

    localStorage.setItem('@coffee-shop:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function subQuantCartItem(coffeeId: number) {
    dispatch(subQuantCartItemAction(coffeeId))
  }

  function addQuantCartItem(coffeeId: number) {
    dispatch(addQuantCartItemAction(coffeeId))
  }

  function remCartItem(coffeeId: number) {
    dispatch(remCartItemAction(coffeeId))
  }
  function addCartItem(id: string, qtd: number) {
    const coffeeListItemIndex = coffeeList.findIndex((Coffee) => {
      return Coffee.id === id
    })
    
    const newItem: CoffeeCart = {
      coffeeId: id,
      qtd,
      value: 10.9//coffeeList[coffeeListItemIndex].price * qtd
    }

    dispatch(addItemToCartAction(newItem))

  }


  
  return (
    <CartContext.Provider value={
      {
        cartList,
        subQuantCartItem,
        addQuantCartItem,
        remCartItem,
        addCartItem,
      }
    }>
      {children}
    </CartContext.Provider>
  )
}