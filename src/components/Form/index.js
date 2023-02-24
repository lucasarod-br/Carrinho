import { Container } from "components/Container";
import { Text } from "components/Text/style";
import React from "react";

import Input from "./Input";
import { StyledForm } from "./style";

function Form() {
  return (
    <Container style={{'gap': '0.3rem'}}>
        <Text  size="18">Cartão de crédito</Text>
      <StyledForm onSubmit={''}>
        <Input
          name={"Número"}
          type="text"
          placeholder={"0000 0000 0000 0000"}
        />
        <Input
          name={"Nome do titular do cartão"}
          placeholder={"Nome impresso no cartão"}
        />
        <div>

        <Input placeholder={"MM/AA"} name={"Data de validade"} short />
        <Input
          name={"Data de validade"}
          placeholder={"000"}
          type="text"
          short
          />
          </div>
      </StyledForm>
    </Container>
  );
}

export default Form;
