import styled from 'styled-components'

const isActiveColor = (props) => {
    return props.active ?  '#000' : "#878787"
}

const isActiveBorder = (props) => {

    return props.active ? '4px' : '1px'
}

 export const StyledHeader = styled.div`
    background-color: #FFF;
    box-shadow: 0px 2px 4px 0px #0000001A;
    height: 37px;
    display: flex;
    justify-content:center ;
    align-items: center;
    gap: 1em;
`
export const Tab = styled.span`
box-sizing: border-box;
    color:${isActiveColor};
    height: 100%; 
    display: flex;
    align-items: center;
    font-size: 14px;
    border-bottom: ${isActiveBorder} solid ${isActiveColor}; 
    
`