import { Container } from "components/Container";
import { Text } from "components/Text/style";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setValues } from "states/slices/cardSlice";

import Input from "./Input";
import { StyledForm } from "./style";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      number: "",
      name: "",
      expire: "",
      cvv: "",
    },
  });

  const validate = (data) => {
    dispatch(setValues(data));

    navigate("/success");
  };

  return (
    <Container>
      <Text
        style={{
          margin: ' 0px auto 4px auto'
        }}
        size="18"
      >
        Cartão de crédito
      </Text>
      <StyledForm onSubmit={handleSubmit(validate)}>
        <Input
          register={register}
          name={"number"}
          label={"Número"}
          type="text"
          erro={errors?.number}
          placeholder={"0000 0000 0000 0000"}
          errorMessage={"insira um número de cartão válido"}
          pattern={/^([0-9]{4}\s?){3}[0-9]{4}$/}
        />
        <Input
          register={register}
          label={"Nome do titular do cartão"}
          name={"name"}
          placeholder={"Nome impresso no cartão"}
          erro={errors?.name}
          errorMessage="insira um nome válido"
          pattern={/^[A-Za-zÀ-ÖØ-öø-ÿ]+([ ][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/}
        />
        
        
        <div style={{width: '88vw' , gap: "8px", "justifyContent": "space-between",  }}>
          <Input
            placeholder={"MM/AA"}
            register={register}
            name={"expire"}
            label={"Data de validade"}
            short
            erro={errors?.expire}
            errorMessage="insira uma data válida"
            pattern={/^(0[1-9]|1[0-2])\/([2-9][2-9])$/}
          />
          <Input
            register={register}
            label={"CVV"}
            name={"cvv"}
            placeholder={"000"}
            type="text"
            short
            erro={errors?.cvv}
            errorMessage="insira um cvv válido"
            pattern={/^\d{3,4}$/}
          />
        </div>
        <input
          type="submit"
          style={{ visibility: "hidden", position: "absolute" }}
          id="submit"
        />
      </StyledForm>
    </Container>
  );
}
export default Form;
