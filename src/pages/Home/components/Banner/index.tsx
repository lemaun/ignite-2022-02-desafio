import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BannerContainer, BannerDesc, BannerItem, BannerItems, BannerLeft, BannerRight, BannerTitle } from "./styles";
import imgBanner from '../../../../assets/images/bannerCoffee.png'
export function Banner() {
  return (
    <BannerContainer>
      <BannerLeft>
        <BannerTitle>Encontre o café perfeito para qualquer hora do dia</BannerTitle>
        <BannerDesc>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</BannerDesc>
        <BannerItems>
          <BannerItem Color="yellowD"><span><ShoppingCart weight="fill" size={16}/></span> Compra simples e segura</BannerItem>
          <BannerItem Color="text"><span><Package weight="fill" size={16}/></span> Embalagem mantém o café intacto</BannerItem>
          <BannerItem Color="yellow"><span><Timer weight="fill" size={16}/></span> Entrega rápida e rastreada</BannerItem>
          <BannerItem Color="purple"><span><Coffee weight="fill" size={16}/></span> O café chega fresquinho até você</BannerItem>
        </BannerItems>
      </BannerLeft>
      <BannerRight>
        <img src={imgBanner} alt="" />
      </BannerRight>
    </BannerContainer>
  )
}