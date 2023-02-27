import { Container } from 'components/Container'
import { Text } from 'components/Text/style'
import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../../components/Products'

const Success = () => {
  const card = useSelector(state => state.card)
console.log(card.name)
  return (
    <>
    <Container style={{'margin': '14px 0', 'padding': '20px' , 'gap': '8px'}}>
    <Text size='22' >Compra efetuada com sucesso</Text>
    <Text size='16' color='#515151'>****.****.****.{card.number.slice(-4)}</Text>
    <Text size='16' color='#515151'>{card.name}</Text>
    <Text size='16' color='#515151'>{card.expire}</Text>
    </Container>
    <Products price={false}/>

    </>
  )
}

export default Success