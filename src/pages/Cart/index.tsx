import { CartForm } from "./components/CartForm";
import { CartItems } from "./components/CartItems";
import { CartContainer } from "./styles";
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFormContext } from "react-hook-form";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const cartFormValidationSchema = zod.object({
  cep: zod.string().regex(/^[0-9]{5}-[0-9]{3}$/,'Informe o CEP no padrão 99999-999'),
  logradouro: zod.string().min(3, 'Informe o logradouro'),
  complemento: zod.string().optional(),
  numero: zod.string().min(1, 'Informe o número'),
  bairro: zod.string().min(1, 'Informe o bairro'),
  cidade: zod.string().min(1, 'Informe a cidade'),
  uf: zod.string().length(2, 'Informe a sigla UF do estado'),
  pagamento: zod.string().min(1, 'Selecione uma forma de pagamento'),
  // minutesAmount: zod.number().min(5, 'O ciclo precisa ser no mínimo 5 minutos.').max(60, 'O ciclo precisa ser no máximo 60 minutos.'),
})

type CartFormData = zod.infer<typeof cartFormValidationSchema> //infere os tipos extraindo das configurações do objeto zod

export function Cart() {
  // const {register} = useFormContext()
  const { createPurchaseData, purchaseData } = useContext(CartContext)

  const CartData = useForm<CartFormData>({
    resolver: zodResolver(cartFormValidationSchema),
    defaultValues: {
      cep: '',
      logradouro: '',
      complemento: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: '',
      pagamento: '',
    }
  })

  const { handleSubmit, watch, reset } = CartData

  function handleConfirmPurchase(data: CartFormData) {
    createPurchaseData(data)
    reset()
  }

  return (
    <CartContainer onSubmit={handleSubmit(handleConfirmPurchase)} action="">
      
      <CartForm/>
      <CartItems/>

    </CartContainer>
  )
}