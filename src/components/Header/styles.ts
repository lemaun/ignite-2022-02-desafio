import styled from "styled-components";

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

export const CartButton = styled.button`
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