import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Button from "../Button";
import { Text } from "../Text/style";
import { Line } from "./Line";
import { StyleSubtotal } from "./style";

function Subtotal() {
  const { subTotal, shippingTotal, discount, total } = useSelector(state => state.cart.prices)
  const format = (item) => (item && item.toFixed(2))

  const location = useLocation()

  const datasButton = {}
   switch (location.pathname) {
    case '/success':
      datasButton['text'] = 'Voltar ao inicio do protótipo'
      datasButton['color'] = '#000000'
      datasButton['to'] = 'cart'
      break
    case '/payment':
      datasButton['text'] = 'Finalizar pedido'
      datasButton['color'] = '#9222DC'
      
      break
    case '/cart':
      datasButton['text'] = 'Seguir para o pagamento'
      datasButton['color'] = '#9222DC'

      datasButton['to'] = 'payment'
      break
    default:
      datasButton['text'] = 'Seguir para a sacola'
      datasButton['color'] = '#9222DC'

      datasButton['to'] = 'cart'
      break
   } 
  return (
    <>
      {<Outlet />}
      <StyleSubtotal>
        <Line>
          <Text>Produtos: {"(3 itens)"}</Text>
          <Text>R${format(subTotal)}</Text>
        </Line>
        <Line>
          <Text>Frete:</Text>
          <Text>R${format(shippingTotal)}</Text>
        </Line>
        <Line>
          <Text>Desconto:</Text>
          <Text bold color="#9222DC">
            R${format(discount)}
          </Text>
        </Line>
        <Line>
          <Text bold>Subtotal</Text>
          <Text bold>R${format(total)}</Text>
        </Line>
        <Button to={`/${datasButton.to && datasButton.to}`} color={`${datasButton.color && datasButton.color}`}>
            {datasButton.text}
        </Button>
      </StyleSubtotal>
    </>
  );
}

export default Subtotal;
