import { Text } from "components/Text/style";
import React from "react";
import { StyledInput } from "./style";

function Input({
  placeholder,
  name,
  short,
  register,
  label,
  pattern,
  erro,
  errorMessage,
}) {
    
  return (
    <StyledInput short={short}>
      <label htmlFor={name}>
        <Text color={"#515151"}>{label}</Text>
      </label>
      <input
        {...register(name, {
          required: true,
          pattern: pattern
        })}
        style={erro && { borderColor: "#DE1616" }}
        name={name}
        type={"text"}
        placeholder={placeholder}
      />

      {erro && (
        <Text
          size='10'
          color="#DE1616"
          style={{
            alignSelf: "start",
            margin: "0"
          }}
        >
          {errorMessage}
        </Text>
      )}
    </StyledInput>
  );
}

export default Input;
