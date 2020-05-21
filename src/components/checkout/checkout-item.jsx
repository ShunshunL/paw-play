import React from 'react'
import {connect} from 'react-redux'
import {removeItem} from '../../redux/cart-actions'
import './checkout-item.scss'

const PetInCheckout = ({item, removeItem}) => {
  const {name, imageUrl, price, count} = item
  return(
    <div className="checkout-item">
      <div className="image-div">
        <img src={imageUrl} alt="pet"/>
      </div>
    <span className="name">{name}</span>
    <span className="quantity">{count}</span>
    <span className="price">{price}</span>
    <div className="remove-btn" onClick={() => removeItem(item) }>&#10005;</div>
    </div> 
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(PetInCheckout)