import styled from "styled-components";

export const StyleBtn = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  max-width: 624px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;
  background: ${(props) => props.color};
  
  margin-top: 0.1rem;
  border-radius: 4px;
  border: none;
`;