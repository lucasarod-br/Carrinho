import { Text } from "components/Text/style";
import React from "react";
import { Link } from "react-router-dom";
import { StyleBtn } from "./style";

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
