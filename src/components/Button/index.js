import { Text } from 'components/Text/style'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'




const StyleBtn = styled.button`
display: flex;
flex-direction: column;
align-items: center;

//padding: 16px 8px;
background: ${ props => props.color ? props.color : "#9222DC"};
border-radius: 4px;
border: none;
margin-top: .5rem;
max-width: 624px;
width: 100%;
box-sizing: border-box;
`

function Button( {to, children}) {
  return (
    <StyleBtn>
      <Link to={to} style={{"textDecoration": "none", 'width': '100%', 'height': '53px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'}}>
        <Text color='white' size={'18'} bold>{children}</Text>
    </Link>
    </StyleBtn>
  )
}

export default Button