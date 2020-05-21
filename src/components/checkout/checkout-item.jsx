import React from 'react'
import {connect} from 'react-redux'
import {removeItem, removeAndDecreaseCount, addItem} from '../../redux/cart-actions'
import './checkout-item.scss'

const PetInCheckout = ({item, removeItem, addItem, removeAndDecreaseCount}) => {
  const {name, imageUrl, price, count} = item
  return(
    <div className="checkout-item">
      <div className="image-div">
        <img src={imageUrl} alt="pet"/>
      </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => removeAndDecreaseCount(item)}>&#10094;</div>
      <span className="value">{count}</span>
      <div className="arrow" onClick={() => addItem(item)}>&#10095;</div>  
    </span>
    <span className="price">{price}</span>
    <div className="remove-btn" onClick={() => removeItem(item) }>&#10005;</div>
    </div> 
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  removeAndDecreaseCount: item => dispatch(removeAndDecreaseCount(item))
})

export default connect(null, mapDispatchToProps)(PetInCheckout)