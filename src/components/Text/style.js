import styled from "styled-components"


const setColor = (props) => {
    return props.color ? props.color : "#000"
}

const setSize = (props) => {
    return props.size ? props.size : "14px"
}

const isBold = (props) => {
    return props.bold ? "700" : "400"
}


export const Text = styled.span`
    color: ${setColor};
    font-weight: ${isBold};
    font-size: ${setSize};
`