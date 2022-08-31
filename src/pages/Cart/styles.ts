import styled from "styled-components";

export const CartContainer = styled.main`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 4rem 0.5rem;
  gap: 2rem;

  h2 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 1rem;
  }
`