import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from './cart-item'
import {selectItems} from '../../redux/cart-selectors'
import { toggleCartHidden } from '../../redux/cart-actions'
import './cart-styles.scss';

const Checkout = ({cartItems, history, dispatch}) => (
  <div className="cart-dropdown">
    <div className="cart-pets">
      {
        cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        : <span className="message">You don't have any cuddlers</span>
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }}>READY TO CUDDLE</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectItems
})

export default withRouter(connect(mapStateToProps)(Checkout));
