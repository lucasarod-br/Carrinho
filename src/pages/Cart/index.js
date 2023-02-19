import React, { useEffect, useState } from 'react'
import api from '../../services/api'

function Cart() {
  const url = 'd6e9a93f-9741-4494-b81e-637a8e9b8ddd'
  const [itens, setItens] = useState([])
  
  useEffect(()=> {
    api.get(url)
    .then( (data) => setItens(data.data.items))
  }, [])
  return (
    <div>
        <div className='elements'>
        {itens.map((iten) => <li>{iten.product.name}</li>)}
        </div>
        <div>Prices</div>
        <button>Next</button>
    </div>
  )
}

export default Cart