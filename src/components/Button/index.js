import { Text } from "components/Text/style";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyleBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  //padding: 16px 8px;
  background: ${(props) => props.color};
  border-radius: 4px;
  border: none;
  margin-top: 0.1rem;
  max-width: 624px;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const handleClick = () => {
  const botao = document.getElementById("submit");
  botao.click();
};

function Button({ to, children, color, type }) {
  return (
    <StyleBtn
      color={color}
      type={type}
      onClick={!to ? handleClick : console.log("com rota")}
    >
      {!to ? (
        <Text color="white" size={"18"} bold>
          {children}
        </Text>
      ) : (
        <>
          <Link
            to={to}
            style={{
              textDecoration: "none",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text color="white" size={"18"} bold>
              {children}
            </Text>
          </Link>
        </>
      )}
    </StyleBtn>
  );
}

export default Button;
