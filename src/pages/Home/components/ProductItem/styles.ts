import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 15.75rem;
  display:flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: ${(props) => props.theme['base-card']};
  border-bottom-left-radius: 32px;
  border-top-right-radius: 32px;
  padding: 1.5rem;

  img {
    margin-top: -2rem;
  }
`
export const TypesContainer = styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  gap: 5px;
  
  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-weight: bold;
    border-radius: 9999px;
    padding: 4px 8px;
  }
`

export const CoffeeName = styled.h2`
  font-size: 1.25rem;
  line-height: 130%;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Description = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`

export const PriceSession = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
`
export const Price = styled.div`
  font-size: 1.5rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};

  span {
    font-size: 0.875rem;
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
  }
`

export const AddCartContainer = styled.div`
  display: flex;
  gap: 6px;
`
export const Counter = styled.div`
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme['base-button']};
  border: none;
`
export const ButtonCount = styled.button`
  padding: 0 0.5rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme['purple']};
  cursor: pointer;
  font-size: 1 rem;
  :focus{
      box-shadow: 0 0 0 2px transparent;
  }
`


export const AddCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 0;

  border-radius: 8px;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

`