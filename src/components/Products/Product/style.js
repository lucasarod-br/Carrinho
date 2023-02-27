import styled from "styled-components";


export const StyledProduct = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.price ? "space-between" : "space-around"};
  align-items: center;
  gap: 7%;
  max-width: 90%;
  text-align: start;

  img {
    width: 60px;
    height: 60px;
    @media (min-width:768px) {
      width: 70px;
    height: 70px;
    }
    @media (min-width:768px) {
      width: 80px;
    height: 80px;
    }

    
  }

  span {
    max-width: 350px;
  }
`;
