import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { Product } from "./Product";
import { ButtonPurchase, CartItemsContainer, ValueDescription, ValuePurchase } from "./styles";

export function CartItems() {
  const { cartList } = useContext(CartContext)
  const itemsTotal = cartList.reduce((a,v) =>  a = a + v.value , 0 )
  const itemsTotalText = itemsTotal.toLocaleString('pt-br', {minimumFractionDigits: 2})
  const grandTotal = (itemsTotal+3.5).toLocaleString('pt-br', {minimumFractionDigits: 2})
  return (
    <div>
      <h2>Cafés selecionados</h2>
      <CartItemsContainer>
        {cartList.map(item => {
          return (
            <Product 
              key={item.coffeeId} 
              coffeeId={item.coffeeId} 
              qtd={item.qtd} 
              value={item.value} 
              image={item.image} 
              name={item.name}
            />
          )
        })}
        <ValuePurchase>
          <ValueDescription>
              <p>Total de itens</p>
              <p>R$ {itemsTotalText}</p>    
          </ValueDescription>
          <ValueDescription>
              <p>Entrega</p>
              <p>R$ 3,50</p>    
          </ValueDescription>
          <ValueDescription>
              <strong>Total</strong>
              <strong>R$ {grandTotal}</strong>    
          </ValueDescription>
        </ValuePurchase>
        <ButtonPurchase type="submit"><a>CONFIRMAR PEDIDO</a></ButtonPurchase>
      </CartItemsContainer>
    </div>
  )
}