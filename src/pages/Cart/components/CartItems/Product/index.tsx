import { Minus, Plus, Trash } from "phosphor-react";
import { ButtonCountProduct, CounterProduct, DeleteProduct, InfosProduct, ProductContainer, ValuesProduct } from "./styles";
import Coffee1 from '../../../../../assets/images/Expresso.png'

export function Product() {
  return (
    <ProductContainer>
        <img src={Coffee1}/>
        <InfosProduct>
            <p>Café do bão</p>
            <div>
                <CounterProduct>
                    <ButtonCountProduct><Minus size={14}/></ButtonCountProduct>
                        <span>10</span>
                    <ButtonCountProduct><Plus size={14}/></ButtonCountProduct>
                </CounterProduct>
                <DeleteProduct>
                    <span><Trash size={14}/></span> REMOVER
                </DeleteProduct>
            </div>
        </InfosProduct>
        <ValuesProduct>R$ 18,99</ValuesProduct>
    </ProductContainer>
  )
}