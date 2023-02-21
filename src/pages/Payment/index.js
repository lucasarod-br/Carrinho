import React from 'react'
import { useSelector } from 'react-redux';


export default function Payment() {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
        {cartItems.map((iten) => <li>{iten.product.name}</li>)}
      
    </div> 
  )
}
