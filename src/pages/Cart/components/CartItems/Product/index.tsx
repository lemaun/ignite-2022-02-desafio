import { Minus, Plus, Trash } from "phosphor-react";
import { ButtonCountProduct, CounterProduct, DeleteProduct, InfosProduct, ProductContainer, ValuesProduct } from "./styles";

import { useContext } from "react";
import { CartContext } from "../../../../../contexts/CartContext";
import { CoffeeCart } from "../../../../../reducers/cart/reducer";

export function Product( { coffeeId, qtd, value, image, name }: CoffeeCart ) {
  const { remCartItem, addQuantCartItem, subQuantCartItem } = useContext(CartContext)
  const formattedValue = value.toLocaleString('pt-br', {minimumFractionDigits: 2})

  function handleRemItemFromCart(){
    remCartItem(coffeeId)
  }

  function handleAddQtd(){
    addQuantCartItem(coffeeId)
  }

  function handleSubQtd(){
    subQuantCartItem(coffeeId)
  }
  return (
    <ProductContainer>
        <img src={image}/>
        <InfosProduct>
            <p>{name}</p>
            <div>
                <CounterProduct>
                    <ButtonCountProduct onClick={handleSubQtd}><Minus size={14}/></ButtonCountProduct>
                        <span>{qtd}</span>
                    <ButtonCountProduct onClick={handleAddQtd}><Plus size={14}/></ButtonCountProduct>
                </CounterProduct>
                <DeleteProduct onClick={handleRemItemFromCart}>
                    <span><Trash size={14}/></span> REMOVER
                </DeleteProduct>
            </div>
        </InfosProduct>
        <ValuesProduct>R$ {formattedValue}</ValuesProduct>
    </ProductContainer>
  )
}