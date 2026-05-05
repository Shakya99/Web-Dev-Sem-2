import React, { useState } from 'react'

const Shopping = () => {
  const [prodName, setProdName] = useState('');
  const [prodPrice, setProdPrice] = useState('');

  return (
    <>
    <div className='cart-container'>
      <h1>Your Shopping Cart</h1>

      <div className='input-section'>
        <h2>Add products</h2>
        <div className='input-group'>
          <input 
          type='text' 
          placeholder="Product name"
          value={prodName}
          onChange={(e) => setProdName(e.target.value)} 
          />

          <input 
          type='number' 
          placeholder="price" 
          step={0.5} 
          min={0}
          value={prodPrice}
          onChange={e => setProdPrice(e.target.value)} 
          />
          <button>Add to cart</button>
        </div>
      </div>

      <div className='cart-items'>
        <h3>Cart Items</h3>
      </div>
    </div>
    <div className='cart-footer'>
      <div className='total'>Total: $0.00</div>
      <button className='checkout-btn'>Checkout</button>
    </div>
  </>
  )
}

export default Shopping
