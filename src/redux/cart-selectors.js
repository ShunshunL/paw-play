import { createSelector } from 'reselect'

const selectCart = state => state.cart 


export const selectItems = createSelector(
  selectCart,
  cart => cart.cartItems
)

export const selectHidden = createSelector(
  selectCart,
  cart => cart.hidden
)

export const itemCount = createSelector(
  selectItems,
  cartItems => cartItems.reduce((all, item) => all + item.count, 0)
)

export const selectTotal = createSelector(
  selectItems,
  cartItems => cartItems.reduce((all, item) => all + item.count * item.price, 0)
)