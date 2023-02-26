import styled from "styled-components";


export const StyledProduct = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.price ? "space-evenly" : "space-around"};
  align-items: center;
  gap: 5%;
  width: 85%;
  text-align: start;
  vertical-align: middle;

  img {
    height: 14vh;
  }

  span {
    max-width: 350px;
  }
`;
