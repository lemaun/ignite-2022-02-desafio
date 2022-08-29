import styled from "styled-components";

export const BannerContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  max-height: 544px;
  padding: 6rem 0.5rem;
`
export const BannerTitle = styled.div`
  max-width: 55%;
  font-size: 3rem;
  line-height: 130%;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme['base-title']};
`