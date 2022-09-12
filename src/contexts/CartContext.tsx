import { addItemToCartAction, remCartItemAction, subQuantCartItemAction, addQuantCartItemAction, cleanCartAction } from "../reducers/cart/actions"
import { cartReducer, CoffeeCart } from "../reducers/cart/reducer"
import { createContext, ReactNode, useEffect, useReducer, useState } from "react"
import { useNavigate } from "react-router-dom";

import {v4 as uuidv4} from 'uuid'


import Coffee1 from '/src/assets/images/Expresso.png'
import Coffee2 from '/src/assets/images/Americano.png'
import Coffee3 from '/src/assets/images/ExpressoCremoso.png'
import Coffee4 from '/src/assets/images/CafeGelado.png'
import Coffee5 from '/src/assets/images/CafecomLeite.png'
import Coffee6 from '/src/assets/images/Latte.png'
import Coffee7 from '/src/assets/images/Capuccino.png'
import Coffee8 from '/src/assets/images/Macchiato.png'
import Coffee9 from '/src/assets/images/Mochaccino.png'
import Coffee10 from '/src/assets/images/ChocolateQuente.png'
import Coffee11 from '/src/assets/images/Cubano.png'
import Coffee12 from '/src/assets/images/Havaiano.png'
import Coffee13 from '/src/assets/images/Arabe.png'
import Coffee14 from '/src/assets/images/Irlandes.png'

interface FormPurchaseData {
  cep: string,
  logradouro: string,
  numero: string,
  complemento?: string,
  bairro: string,
  cidade: string,
  uf: string
  pagamento: string
}
interface CoffeeContextType {
  // coffees: Coffee[]
  cartList: CoffeeCart[]
  purchaseData: FormPurchaseData
  subQuantCartItem: (coffeeId:string) => void
  addQuantCartItem: (coffeeId:string) => void
  remCartItem: (coffeeId:string) => void
  addCartItem: (id: string, qtd: number) => void
  createPurchaseData: (data: FormPurchaseData) => void,
  cleanCart: () => void,
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CoffeeContextType)
export const coffeeList = [
  {
      id:'Coffee1',
      image:Coffee1,
      name:"Expresso Tradicional",
      type:"TRADICIONAL",
      amount:0,
      price:9.90,
      description:"O tradicional café feito com água quente e grãos moídos"

  },
  {
      id:'Coffee2',
      image:Coffee2,
      name:"Expresso Americano",
      type:"TRADICIONAL",
      amount:0,
      price:9.90,
      description:"Expresso diluído, menos intenso que o tradicional"

  },
  {
      id:'Coffee3',
      image:Coffee3,
      name:"Expresso Cremoso",
      type:"TRADICIONAL",
      amount:0,
      price:9.90,
      description:"Café expresso tradicional com espuma cremosa"

  },
  {
      id:'Coffee4',
      image:Coffee4,
      name:"Expresso Gelado",
      type:"TRADICIONAL",
      typeduo:"GELADO",
      amount:0,
      price:9.90,
      description:"Bebida preparada com café expresso e cubos de gelo"

  },
  {
      id:'Coffee5',
      image:Coffee5,
      name:"Café com Leite",
      type:"TRADICIONAL",
      typeduo:"COM LEITE",
      amount:0,
      price:9.90,
      description:"Meio a meio de expresso tradicional com leite vaporizado"

  },
  {
      id:'Coffee6',
      image:Coffee6,
      name:"Latte",
      typeduo:"COM LEITE",
      type:"TRADICIONAL",
      price:9.90,
      description:"Uma dose de café expresso com o dobro de leite e espuma cremosa"

  },
  {
      id:'Coffee7',
      image:Coffee7,
      name:"Capuccino",
      typeduo:"COM LEITE",
      type:"TRADICIONAL",
      price:9.90,
      description:"Bebida com canela feita de doses iguais de café, leite e espuma"

  },
  {
      id:'Coffee8',
      image:Coffee8,
      name:"Macchiato",
      typeduo:"COM LEITE",
      type:"TRADICIONAL",
      price:9.90,
      description:"Café expresso misturado com um pouco de leite quente e espuma"

  },
  {
      id:'Coffee9',
      image:Coffee9,
      name:"Mocaccino",
      typeduo:"COM LEITE",
      type:"TRADICIONAL",
      price:9.90,
      description:"Café expresso com calda de chocolate, pouco leite e espuma"

  },
  {
      id:'Coffee10',
      image:Coffee10,
      name:"Chocolate Quente",
      type:"COM LEITE",
      typeduo:"ESPECIAL",
      price:9.90,
      description:"Bebida feita com chocolate dissolvido no leite quente e café"

  },
  {
      id:'Coffee11',
      image:Coffee11,
      name:"Cubano",
      typeduo:"ALCOÓLICO",
      typetrio:"GELADO",
      price:9.90,
      type:"ESPECIAL",
      description:"Drink gelado de café expresso com rum, creme de leite e hortelã"

  },{
      id:'Coffee12',
      image:Coffee12,
      name:"Havaiano",
      type:"ESPECIAL",
      price:9.90,
      description:"Bebida adocicada preparada com café e leite de coco"

  },{
      id:'Coffee13',
      image:Coffee13,
      name:"Árabe",
      type:"ESPECIAL",
      price:9.90,
      description:"Bebida preparada com grãos de café árabe e especiarias"

  },{
      id:'Coffee14',
      image:Coffee14,
      name:"Irlandês",
      type:"ESPECIAL",
      price:9.90,
      typeduo:'ALCOÓLICO',
      description:"Bebida a base de café, uísque irlandês, açúcar e chantilly"

  },
]

export function CartContextProvider({ children }: CartContextProviderProps) {
  const navigate = useNavigate()
  const [purchaseData, setPurchaseData] = useState<FormPurchaseData>({cep: '', logradouro: '', bairro: '', cidade: '', numero: '', uf: '', pagamento: ''})
  const [cartState, dispatch] = useReducer(
    cartReducer,
    { cartList: [] },
    () => {
      const storedStateAsJSON = localStorage.getItem('@coffee-shop:cart-state-1.0.0',)
      
      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

    }
  )

  const { cartList }  = cartState

  function createPurchaseData(data: FormPurchaseData){
    const newPurchaseData: FormPurchaseData = {
        cep: data.cep,
        logradouro: data.logradouro,
        bairro: data.bairro,
        numero: data.numero,
        complemento: data.complemento,
        cidade: data.cidade,
        uf: data.uf,
        pagamento: data.pagamento
    }
    setPurchaseData(newPurchaseData)
    navigate("/success", {
        state: data,
    })
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-shop:cart-state-1.0.0', stateJSON)
  }, [cartState])

  function subQuantCartItem(coffeeId: string) {
    dispatch(subQuantCartItemAction(coffeeId))
  }

  function addQuantCartItem(coffeeId: string) {
    dispatch(addQuantCartItemAction(coffeeId))
  }

  function remCartItem(coffeeId: string) {
    dispatch(remCartItemAction(coffeeId))
  }

  function cleanCart() {
    dispatch(cleanCartAction())
  }

  function addCartItem(id: string, qtd: number) {
    const coffeeListItemIndex = coffeeList.findIndex((Coffee) => {
      return Coffee.id === id
    })
    
    const newItem: CoffeeCart = {
      coffeeId: id,
      qtd,
      value: coffeeList[coffeeListItemIndex].price * qtd,
      image: coffeeList[coffeeListItemIndex].image,
      name: coffeeList[coffeeListItemIndex].name
    }

    dispatch(addItemToCartAction(newItem))

  }


  return (
    <CartContext.Provider value={
      {
        cartList,
        purchaseData,
        subQuantCartItem,
        addQuantCartItem,
        remCartItem,
        addCartItem,
        createPurchaseData,
        cleanCart, 
      }
    }>
      {children}
    </CartContext.Provider>
  )
}