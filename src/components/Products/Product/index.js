import React from 'react'
import styled from 'styled-components'
import { Text } from '../../Text/style'

const StyledProduct =styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`

function Product( { img, name, maxPrice, originalPrice, price} ) {
    const prices = maxPrice === originalPrice
    return (

    
    <StyledProduct>
        <img src={img} alt={name} />
        
        <Text size='12px'>{name}</Text>

        {price && ( prices ? <Text bold>R${maxPrice.toFixed(2)}</Text> : <div style={{'display': 'flex', 'flexDirection': 'column'}}> <Text color='#9B9B9B'>R$<s>{maxPrice.toFixed(2)}</s></Text><Text bold >R${originalPrice.toFixed(2)}</Text>  </div>)}

    </StyledProduct>
    )
}

export default Product