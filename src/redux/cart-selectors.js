import { createSelector } from 'reselect'

const selectCart = state => state.cart 


export const selectItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const itemCount = createSelector(
  [selectItems],
  cartItems => cartItems.reduce((all, item) => all + item.count, 0)
)