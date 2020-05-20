import React from 'react'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart-actions'
import'./checkout-styles.scss'
import { ReactComponent as CheckoutIcon } from '../../assets/checkout.svg'

const Checkout = ({toggleCartHidden}) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <CheckoutIcon className="checkout-icon" />
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden( ))
})

export default connect(null, mapDispatchToProps)(Checkout);