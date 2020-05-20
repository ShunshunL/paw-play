import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Checkout from '../checkout/checkout-component'
import Cart from '../checkout/cart-component'
import { auth } from '../../firebase/firebase.utils'
import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>
        PET
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <Checkout />
    </div>
    {
      hidden ? null : <Cart />
    }
  </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);