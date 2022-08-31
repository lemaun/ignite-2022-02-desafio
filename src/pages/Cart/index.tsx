import { CartForm } from "./components/CartForm";
import { CartItems } from "./components/CartItems";
import { CartContainer } from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <CartForm/>
      <CartItems/>
    </CartContainer>
  )
}