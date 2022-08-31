import styled from "styled-components";

export const ProductsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;

  h1 {
    flex: 1 100%;
    font-size: 2rem;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`