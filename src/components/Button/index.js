import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'




const StyleBtn = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 16px 8px;
background: ${ props => props.color ? props.color : "#9222DC"};
border-radius: 4px;
border: none;
margin-top: .5rem;
font-size: 18px;
font-weight: 700;
max-width: 624px;
width: 100%;
`

function Button( {to, children}) {
  return (
    <StyleBtn>
      <Link to={to} style={{"textDecoration": "none", "color": "white"}}>
        {children}
    </Link>
    </StyleBtn>
  )
}

export default Button