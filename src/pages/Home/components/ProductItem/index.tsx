import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { AddCartButton, AddCartContainer, ButtonCount, CoffeeName, Counter, Description, ItemContainer, Price, PriceSession, TypesContainer } from "./styles";

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
        <Price><span>R$ </span>{props.price}</Price>
        <AddCartContainer>
          <Counter>
              <ButtonCount><Minus size={14} /></ButtonCount>
              <span>1</span>
              <ButtonCount><Plus size={14} /></ButtonCount>
          </Counter>
          <AddCartButton><ShoppingCart weight="fill" size={22}/></AddCartButton>
        </AddCartContainer>
      </PriceSession>
    </ItemContainer>
  )
}