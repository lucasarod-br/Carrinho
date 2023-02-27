import styled from "styled-components";


export const StyledProduct = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.price ? "space-between" : "space-around"};
  align-items: center;
  gap: 8%;
  width: 70%;
  text-align: start;

  img {
    height: 10vh;
  }

  span {
    max-width: 350px;
  }
`;
