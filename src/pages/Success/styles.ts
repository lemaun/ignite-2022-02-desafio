import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column;
  padding: 4rem 0.5rem;
  gap: 2.5rem;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme['yellow-dark']};
  }
  h2 {
    font-size: 1.25rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-between;
`

export const Details = styled.div`
  width: 46%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 0 2rem;
  background: 
    linear-gradient(${(props) => props.theme.background}, ${(props) => props.theme.background}) padding-box,
    linear-gradient(to left, ${(props) => props.theme.purple}, ${(props) => props.theme.yellow}) border-box;
  border-radius: 0 40px 0 40px;
  border: 1px solid transparent;
  @media (max-width: 1028px) {
    width: 100%;
  }
`

export const DetailItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  line-height: 130%;

`

const COLORS = {
  yellow: 'yellow',
  yellowD: 'yellow-dark',
  purple: 'purple'
} as const

interface IconProps {
  Color: keyof typeof COLORS;
}

export const Icon = styled.div<IconProps>`
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme[COLORS[props.Color]]};
  color: ${(props) => props.theme.white};
`