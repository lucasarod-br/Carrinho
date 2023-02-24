import { Container } from "components/Container";
import { Text } from "components/Text/style";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { StyledForm } from "./style";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container style={{'gap': '0.5rem'}}>
        <Text size="32">Carrinho</Text>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
