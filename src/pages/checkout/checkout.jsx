import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectItems, selectTotal} from '../../redux/cart-selectors'
import PetInCheckout from '../../components/checkout/checkout-item'
import './checkout.scss'

const CheckoutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-div">
        <span>Dog</span>
      </div>
      <div className="header-div">
        <span>Name</span>
      </div>
      <div className="header-div">
        <span>Hours</span>
      </div>
      <div className="header-div">
        <span>Price</span>
      </div>
      <div className="header-div">
        <span>Remove</span>
      </div>
    </div>
    {
      cartItems.map(item => <PetInCheckout key={item.id} item={item} />)
    }
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
  )

  const mapStateToProps = createStructuredSelector({
    cartItems: selectItems,
    total: selectTotal
  })

export default connect(mapStateToProps)(CheckoutPage);