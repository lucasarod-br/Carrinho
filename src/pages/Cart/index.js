import React from 'react'
import { useSelector } from 'react-redux';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  return (
    <div>
        <div className='elements'>
        {cartItems.map((iten) => <li>{iten.product.name}</li>)}
        </div>
    </div>
  )
}

export default Cart