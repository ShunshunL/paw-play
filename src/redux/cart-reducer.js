import CardActions from './cart-types'
import {addItemToCart} from './utils'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

const cartReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case CardActions.TOGGLE_HIDDEN: 
      return {
        ...state, 
        hidden: !state.hidden 
      };
    case CardActions.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    default: 
      return state
  }
}

export default cartReducer;