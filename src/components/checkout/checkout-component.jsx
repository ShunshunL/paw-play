import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart-actions'
import {itemCount} from '../../redux/cart-selectors'
import'./checkout-styles.scss'
import { ReactComponent as CheckoutIcon } from '../../assets/checkout.svg'

const Checkout = ({toggleCartHidden, allCount}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <CheckoutIcon className="checkout-icon" />
    <span className="item-count">{allCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden( ))
})

// calculate all cart items
const mapStateToProps = createStructuredSelector({
  allCount: itemCount
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);