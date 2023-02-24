import styled from "styled-components"


const setColor = (props) => {
    return props.color ? props.color : "#000"
}

const setSize = (props) => {
    if (window.innerWidth <= 375) {
        return props.size ? props.size : "14"
    }
    else if (window.innerWidth <= 768) {
        return props.size ? props.size *1.1 : "16"
        
    }
    else if (window.innerWidth <= 1024) {
        return props.size ?  props.size * 1.2 : '18';
    }
    else {
        return props.size ?  props.size * 1.22 : '19';
    }
}

const isBold = (props) => {
    return props.bold ? "700" : "400"
}

  
export const Text = styled.span`

    color: ${setColor};
    font-weight: ${isBold};
    font-size: ${setSize}px;

`

