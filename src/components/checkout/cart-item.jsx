import React from 'react'
import './cart-item.scss'

const CartItem = ({ item: { imageUrl, price, name, count }}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item"/>
    <div className="item">
      <span className="name">{name}</span>
      <span className="price">{count} x ${price}</span>
    </div>
  </div>
)

export default CartItem;