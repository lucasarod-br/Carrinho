import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Button from "../Button";
import { Text } from "../Text/style";
import { Line } from "./Line";
import { StyleSubtotal } from "./style";

function Subtotal() {
  const { subTotal, shippingTotal, discount, total } = useSelector(state => state.cart.prices)
  const format = (item) => (item ? item.toFixed(2) : 'Carregando...')

  const location = useLocation()
  const redirect = location.pathname === '/cart' ?  'payment' :  'success'
  
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
        <Button to={`/${redirect}`}>
            Seguir para o pagamento
        </Button>
      </StyleSubtotal>
    </>
  );
}

export default Subtotal;
