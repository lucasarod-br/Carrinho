import styled from "styled-components";

const isActiveColor = (props) => {
  return props.active ? "#000" : "#878787";
};



export const StyledHeader = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px #0000001a;
  height: 37px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (min-width: 768px) {
    height: 45px;
    gap: 2rem;
  }

`;
export const Tab = styled.span`
  box-sizing: border-box;
  color: ${isActiveColor};
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: ${props => props.active ? "4px" : "2px"} solid ${isActiveColor};
  @media (min-width: 768px) {
  border-bottom: ${props => props.active ? "6px" : "3px"} solid ${isActiveColor};
  }
`;
