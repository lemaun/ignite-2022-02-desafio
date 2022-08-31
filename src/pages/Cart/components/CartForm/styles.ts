import styled from "styled-components";

export const CartFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction:column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 8px;
  padding: 2.5rem;
  gap: 1rem;
  flex-wrap: wrap;
`

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
  flex:1;
`

const COLORS = {
  yellowD: 'yellow-dark',
  purple: 'purple'
} as const

interface IconProps {
  Color: keyof typeof COLORS;
}

export const Icon = styled.div<IconProps>`
  color: ${(props) => props.theme[COLORS[props.Color]]};
`
export const Titles = styled.div`
  display:flex;
  flex-direction: column;
  gap: 0.25rem;
`
export const Title = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
  flex:1;  
`
export const Description = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  flex:1;
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "cep . ."
                        "rua rua rua"
                        "numero complemento complemento"
                        "bairro cidade uf";
  gap: 1rem;

  @media (max-width: 875px) {
    grid-template-columns: 1fr;
    grid-template-areas: "cep"
                          "rua"
                          "numero"
                          "complemento"
                          "bairro"
                          "cidade"
                          "uf";
  }

`

const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  height: 2.5rem;
  border: 0;
  border: 1px solid ${(props) => props.theme['base-button']};
  font-weight: normal;
  font-size: 0.875rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['base-text']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.purple};
  }
  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${(props) => props.theme['base-label']};
      opacity: 1; /* Firefox */
  }
`

export const CepInput = styled(BaseInput)`
  grid-area: cep;
`

export const LogradouroInput = styled(BaseInput)`
  grid-area: rua;
`
export const NumInput = styled(BaseInput)`
  grid-area: numero;
`
export const CompInput = styled(BaseInput)`
  grid-area: complemento;
`
export const BairroInput = styled(BaseInput)`
  grid-area: bairro;
`
export const CidadeInput = styled(BaseInput)`
  grid-area: cidade;
`
export const UFInput = styled(BaseInput)`
  grid-area: uf;
`

export const PaymentForm = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 820px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  button{
    display: flex;
    flex: 1;
    gap: 0.75rem;
    align-items: center;
    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};
    font-size: 0.75rem;
    font-weight: 400;
    padding: 1rem;
    border-radius: 6px;
    text-decoration: none;
    border: none;
    :hover{
      background: ${props => props.theme['base-hover']};
      cursor: pointer;
    }
    :focus{
      background: ${props => props.theme['purple-light']};
      box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    }
    span {
      color: ${(props) => props.theme.purple};
    }
  }

`
