import styled from "styled-components";
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display:flex;
  align-items: center;
  justify-content: space-between;

`

export const RightButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CityButton = styled.button`
  height: 2.375rem;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 0;

  border-radius: 8px;
  font-size: 0.875rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

`

export const CartButton = styled(Link)`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 0;

  border-radius: 8px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

`

export const CartNumberItems = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;
  top: -0.5rem;
  right: 1.25rem;
  
  border-radius: 9999px;
  
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  
  font-size: 0.75rem;
  font-weight: bold;
`