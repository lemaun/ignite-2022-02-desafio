import { CartButton, CartNumberItems, CityButton, HeaderContainer, RightButtonsContainer } from "./styles";

import logo from '../../assets/images/logo.png'
import {MapPin, ShoppingCart} from 'phosphor-react'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";


export function Header() {
  const { cartList } = useContext(CartContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <span><img src={logo} alt="" /></span>
      </NavLink>
      <RightButtonsContainer>

        <CityButton>
          <MapPin weight="fill" size={22}/>
          Porto Alegre, RS
        </CityButton>

        <CartButton to="/cart">
          <ShoppingCart weight="fill" size={22}/>
        </CartButton>
        {cartList.length > 0 && <CartNumberItems>{cartList.length}</CartNumberItems>}
          
        

      </RightButtonsContainer>
    </HeaderContainer>
  )
    
}