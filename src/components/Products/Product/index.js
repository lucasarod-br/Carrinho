import React from 'react'
import styled from 'styled-components'
import { Text } from '../../Text/style'

const StyledProduct =styled.div`
    display: flex;
    justify-content: ${ props => props.price ? 'space-evenly' : 'space-between'};
    align-items: center;
   gap:10%;
    width: 85%;
    text-align: start;
    vertical-align: middle;

    img {
        height: 14vh;    
    }

    span {
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 350px;
    }
`

function Product( { img, name, maxPrice, originalPrice, price} ) {
    const prices = maxPrice === originalPrice
    return (

    
    <StyledProduct>
        <img src={img} alt={name}/>
        
        <Text size='12' style={{'display': 'inline-block'}}>{name}</Text>

        {price && ( prices ? <Text bold>R${maxPrice.toFixed(2)}</Text> : <div style={{'display': 'flex', 'flexDirection': 'column'}}> <Text color='#9B9B9B'>R$<s>{maxPrice.toFixed(2)}</s></Text><Text bold >R${originalPrice.toFixed(2)}</Text>  </div>)}

    </StyledProduct>
    )
}

export default Product