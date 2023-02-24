import { Text } from "components/Text/style";
import React from "react";
import { StyledInput } from "./style";

function Input({ placeholder, name, short }) {
  return (
    <StyledInput short={short}>
      <label htmlFor={name}>
        <Text color={'#515151'}>{name}</Text>
      </label>
      <input
      type={'text'}
        name={name}
        placeholder={placeholder}
      />
    </StyledInput>
  );
}

export default Input;
