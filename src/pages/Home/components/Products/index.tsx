import { ProductsContainer } from "./styles"
import { ProductItem } from "../ProductItem";
import { coffeeList } from "../../../../contexts/CartContext"

export function Products() {
  const coffees = coffeeList
  return (
    <ProductsContainer>
      <h1>Nossos cafés</h1>
      {coffees.map(coffee => (
        <ProductItem 
          key={coffee.id} 
          id={coffee.id} 
          image={coffee.image}
          name={coffee.name}
          type={coffee.type}
          typeduo={coffee.typeduo}
          typetrio={coffee.typetrio}
          price={coffee.price}
          description={coffee.description}
        />
      ))}
    </ProductsContainer>
  )
}