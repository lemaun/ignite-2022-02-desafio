import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { DetailItem, Details, DetailsContainer, Icon, SuccessContainer } from "./styles";
import imgDelivery from '../../assets/images/Delivery.png'
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Success() {
  const { purchaseData } = useContext(CartContext)
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
            <p>Entrega em <strong>{purchaseData.logradouro}, {purchaseData.numero}</strong><br/>{purchaseData.bairro} - {purchaseData.cidade}, {purchaseData.uf}</p>
          </DetailItem>
          <DetailItem>
            <Icon Color="yellow"><Timer weight="fill" size={16} /></Icon>
            <p>Previsão de entrega<br/><strong>20 min - 30 min</strong></p>
          </DetailItem>
          <DetailItem>
            <Icon Color="yellowD"><CurrencyDollar size={16} /></Icon>
            <p>Pagamento na entrega<br/><strong>{purchaseData.pagamento}</strong></p>
          </DetailItem>
        </Details>
        <div>
          <img src={imgDelivery} />
        </div>
      </DetailsContainer>
    </SuccessContainer>
  )

}