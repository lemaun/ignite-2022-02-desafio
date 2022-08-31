import { Product } from "./Product";
import { ButtonPurchase, CartItemsContainer, ValueDescription, ValuePurchase } from "./styles";

export function CartItems() {
  return (
    <div>
      <h2>Cafés selecionados</h2>
      <CartItemsContainer>
        <Product/>
        <ValuePurchase>
          <ValueDescription>
              <p>Total de itens</p>
              <p>R$ 18,99</p>    
          </ValueDescription>
          <ValueDescription>
              <p>Entrega</p>
              <p>R$ 3,50</p>    
          </ValueDescription>
          <ValueDescription>
              <strong>Total</strong>
              <strong>R$ 22,99</strong>    
          </ValueDescription>
        </ValuePurchase>
        <ButtonPurchase><a>CONFIRMAR PEDIDO</a></ButtonPurchase>
      </CartItemsContainer>
    </div>
  )
}