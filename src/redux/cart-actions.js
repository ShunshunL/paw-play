import CardTypes from './cart-types'

export const toggleCartHidden = () => ({
  type: CardTypes.TOGGLE_HIDDEN
})

export const addItem = item => ({
  type: CardTypes.ADD_ITEM,
  payload: item 
})

export const removeItem = item => ({
  type: CardTypes.REMOVE_ITEM,
  payload: item 
})

export const removeAndDecreaseCount = item => ({
  type: CardTypes.REMOVE_AND_DECREASE_COUNT,
  payload: item
})