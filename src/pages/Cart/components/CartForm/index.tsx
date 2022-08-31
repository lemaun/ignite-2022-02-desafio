import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { 
  AddressForm, 
  Header,
  BairroInput, 
  CartFormContainer, 
  CepInput, 
  CidadeInput, 
  CompInput, 
  Description, 
  FormContainer, 
  Icon, 
  LogradouroInput, 
  NumInput, 
  Title, 
  Titles, 
  UFInput,
  PaymentForm} from "./styles";

export function CartForm() {
  return(
    <div>
      <h2>Complete seu pedido</h2>
      <CartFormContainer>
        <FormContainer>
          <Header>
            <Icon Color="yellowD"><MapPinLine size={22}/></Icon>
            <Titles>
                <Title>Endereço de Entrega</Title>
                <Description>Informe o endereço onde deseja receber seu pedido</Description>
            </Titles>
          </Header>
            <AddressForm>
              <CepInput
                id="cep"
                placeholder="CEP"
              />
              <LogradouroInput
                id="street"
                placeholder="Rua/Av"
              />
              <NumInput
                id="num"
                placeholder="Número"
              />
              <CompInput
                id="comp"
                placeholder="Complemento"
              />
              <BairroInput
                id="bairro"
                placeholder="Bairro"
              />
              <CidadeInput
                id="cidade"
                placeholder="Cidade"
              />
              <UFInput
                id="uf"
                placeholder="UF"
              />
            </AddressForm>
        </FormContainer>
        <FormContainer>
          <Header>
            <Icon Color="purple"><CurrencyDollar size={22}/></Icon>
            <Titles>
                <Title>Pagamento</Title>
                <Description>O pagamento é feito na entrega. Escolha a forma que deseja pagar</Description>
            </Titles>
          </Header>
            <PaymentForm>
              <button><span><CreditCard size={16}/></span>CARTÃO DE CRÉDITO</button>
              <button><span><Bank size={16}/></span>CARTÃO DE DÉBITO</button>
              <button><span><Money size={16}/></span>DINHEIRO</button>
            </PaymentForm>
        </FormContainer>
      </CartFormContainer>
    </div>
  )
}