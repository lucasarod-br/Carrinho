import styled from "styled-components"
import { isBold, setColor, setSize } from "."
  
export const Text = styled.span`
    color: ${setColor};
    font-weight: ${isBold};
    font-size: ${setSize}px;
    display: flex;
    align-items: center;
    justify-content: center;
`