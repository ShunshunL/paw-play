import React from 'react';
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';
import CartItem from './cart-item'
import {selectItems} from '../../redux/cart-selectors'
import './cart-styles.scss';

const Checkout = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-pets">
      {
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <CustomButton>READY TO CUDDLE</CustomButton>
  </div>
)

const mapStateToProps = state => ({
  cartItems: selectItems(state)
})

export default connect(mapStateToProps)(Checkout);
