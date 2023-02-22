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
color: white;
font-size: 18px;
font-weight: 700;
width: 100%;
text-decoration: none;
`

function Button( {to, children}) {
  return (
    <Link to={to} style={{"textDecoration": "none"}}>
    <StyleBtn>
        {children}
    </StyleBtn>
    </Link>
  )
}

export default Button