import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
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
  PaymentForm,
  MethodPayment} from "./styles";

export function CartForm() {
  const { register, formState: {errors} } = useFormContext()
  const paymentError = errors?.payment?.message as unknown as string
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
                {...register('cep')}
                />
              <LogradouroInput
                id="logradouro"
                placeholder="Rua/Av"
                {...register('logradouro')}
                />
              <NumInput
                id="numero"
                placeholder="Número"
                {...register('numero')}
                />
              <CompInput
                id="complemento"
                placeholder="Complemento"
                {...register('complemento')}
                />
              <BairroInput
                id="bairro"
                placeholder="Bairro"
                {...register('bairro')}
                />
              <CidadeInput
                id="cidade"
                placeholder="Cidade"
                {...register('cidade')}
                />
              <UFInput
                id="uf"
                placeholder="UF"
                {...register('uf')}
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
              <MethodPayment>
                <input id="credit" value="Cartão de Crédito" type="radio" {...register('pagamento')}/>
                <label htmlFor="credit">
                  <div><CreditCard color="#8047F8" size={16} />CARTÃO DE CRÉDITO</div>
                </label>
              </MethodPayment>
              <MethodPayment>
                <input id="debit" value="Cartão de Débito" type="radio" {...register('pagamento')} />
                <label htmlFor="debit">
                  <div><Bank color="#8047F8" size={16} />CARTÃO DE DÉBITO</div>
                </label>
              </MethodPayment>
              <MethodPayment>
                <input id="money" value="Dinheiro" type="radio" {...register('pagamento')} />
                <label htmlFor="money">
                  <div><Money color="#8047F8" size={16} />DINHEIRO</div>
                </label>
              </MethodPayment>
            </PaymentForm>
            <span>{paymentError}</span>
        </FormContainer>
      </CartFormContainer>
    </div>
  )
}