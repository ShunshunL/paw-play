import React from 'react'
import './checkout-item.scss'

const PetInCheckout = ({item: {name, imageUrl, price, count}}) => (
  <div className="checkout-item">
    <div className="image-div">
      <img src={imageUrl} alt="pet"/>
    </div>
  <span className="name">{name}</span>
  <span className="quantity">{count}</span>
  <span className="price">{price}</span>
  <div className="remove-btn">&#10005;</div>
  </div>
)

export default PetInCheckout