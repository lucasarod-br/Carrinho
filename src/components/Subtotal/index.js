import React from "react";
import { Outlet } from "react-router-dom";
import { Text } from "../Text/style";
import { Line } from "./Line";
import { StyleSubtotal } from "./style";

function Subtotal() {
  return (
    <>
      {<Outlet />}
      <StyleSubtotal>
        <Line>
          <Text >Produtos: {'(3 itens)'}</Text>
          <Text >R${28.45}</Text>
        </Line>
        <Line>
          <Text>Frete:</Text>
          <Text>R${5.45}</Text>
        </Line>
        <Line>
        <Text>
            Desconto:
          </Text>
          <Text bold color="#9222DC">R${30.00}</Text>
          
        </Line>
        <Line>
          <Text bold>Subtotal</Text>
          <Text bold>
          R${600.00}
          </Text>
        </Line>
        <button><Text color="white" bold size={'18px'}>Seguir para o pagamento</Text></button>
      </StyleSubtotal>
    </>
  );
}

export default Subtotal;
