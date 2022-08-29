import { CartButton, CityButton, HeaderContainer, RightButtonsContainer } from "./styles";

import logo from '../../assets/images/logo.png'
import {MapPin, ShoppingCart} from 'phosphor-react'


export function Header() {
  return (
    <HeaderContainer>
      <span><img src={logo} alt="" /></span>
      <RightButtonsContainer>

        <CityButton>
          <MapPin size={22}/>
          Porto Alegre, RS
        </CityButton>

        <CartButton>
          <ShoppingCart size={22}/>
        </CartButton>
        
      </RightButtonsContainer>
    </HeaderContainer>
  )
    
}