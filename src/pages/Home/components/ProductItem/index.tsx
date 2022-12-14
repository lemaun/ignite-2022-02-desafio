import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { AddCartButton, AddCartContainer, ButtonCount, CoffeeName, Counter, Description, ItemContainer, Price, PriceSession, TypesContainer } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";

interface CoffeeProps {
  id: string;
  name: string;
  type: string;
  typeduo?: string;
  typetrio?: string;
  description: string,
  image: string | any;
  price:string | any;
} 

export function ProductItem({...props}:CoffeeProps) {
  const { addCartItem } = useContext(CartContext)

  const [qtd, setQtd] = useState(1)

  function subQtd(){
    setQtd((state) => {
      if (qtd > 1){
        return state - 1
      }
      return state
    })
  }

  function addQtd(){
    setQtd((state) => {
      return state + 1
    })
  }
  function handleAddCartItem(){
    addCartItem(props.id, qtd)
  }

  const formattedPrice = props.price.toLocaleString('pt-br', {minimumFractionDigits: 2});

  return (
    <ItemContainer>
      <img src={props.image} />
      <TypesContainer>
        <span>{props.type}</span>
        {props.typeduo && <span>{props.typeduo}</span>}
        {props.typetrio && <span>{props.typetrio}</span>}
      </TypesContainer>
      <CoffeeName>{props.name}</CoffeeName>
      <Description>{props.description}</Description>
      <PriceSession>
        <Price><span>R$ </span>{formattedPrice}</Price>
        <AddCartContainer>
          <Counter>
              <ButtonCount onClick={subQtd}><Minus size={14} /></ButtonCount>
              <span>{qtd}</span>
              <ButtonCount onClick={addQtd}><Plus size={14} /></ButtonCount>
          </Counter>
          <AddCartButton onClick={handleAddCartItem}><ShoppingCart weight="fill" size={22}/></AddCartButton>
        </AddCartContainer>
      </PriceSession>
    </ItemContainer>
  )
}