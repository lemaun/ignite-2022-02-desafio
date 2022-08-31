import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { DetailItem, Details, DetailsContainer, Icon, SuccessContainer } from "./styles";
import imgDelivery from '../../assets/images/Delivery.png'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </div>
      <DetailsContainer>
        <Details>
          <DetailItem>
            <Icon Color="purple"><MapPin weight="fill" size={16} /></Icon>
            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong><br/>Farrapos - Porto Alegre, RS</p>
          </DetailItem>
          <DetailItem>
            <Icon Color="yellow"><Timer weight="fill" size={16} /></Icon>
            <p>Previsão de entrega<br/><strong>20 min - 30 min</strong></p>
          </DetailItem>
          <DetailItem>
            <Icon Color="yellowD"><CurrencyDollar size={16} /></Icon>
            <p>Pagamento na entrega<br/><strong>Cartão de Crédito</strong></p>
          </DetailItem>
        </Details>
        <div>
          <img src={imgDelivery} />
        </div>
      </DetailsContainer>
    </SuccessContainer>
  )

}