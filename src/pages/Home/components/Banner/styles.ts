import styled from "styled-components";

export const BannerContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  max-height: 544px;
  padding: 6rem 0.5rem;
`
export const BannerLeft = styled.div`
  max-width: 55%;
`
export const BannerTitle = styled.div`
  font-size: 3rem;
  line-height: 130%;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme['base-title']};
`
export const BannerDesc = styled.div`
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-subtitle']};
  margin-top: 1rem;
`
export const BannerItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 2;  
  gap: 1.25rem;
  justify-content: space-between;
  margin-top: 4rem;
`
const COLORS = {
  yellow: 'yellow',
  yellowD: 'yellow-dark',
  text: 'base-text',
  purple: 'purple'
} as const

interface ItemProps {
  Color: keyof typeof COLORS;
}

export const BannerItem = styled.div<ItemProps>`
  display: flex;
  height: 2rem;
  gap: 10px;
  align-items: center;
  span {
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme[COLORS[props.Color]]};
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const BannerRight = styled.div`
  max-width: 45%;
`