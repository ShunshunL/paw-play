import CardTypes from './cart-types'

export const toggleCartHidden = () => ({
  type: CardTypes.TOGGLE_HIDDEN
})

export const addItem = item => ({
  type: CardTypes.ADD_ITEM,
  payload: item 
})