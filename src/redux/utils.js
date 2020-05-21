export const addItemToCart = (cartItems, item) => {
  const alreadyThere = cartItems.find(
    cartItem => cartItem.id === item.id
  )

  if(alreadyThere) {
    return cartItems.map(cartItem => cartItem.id === item.id ? {...cartItem, count: cartItem.count + 1} : cartItem)
  }

  return [...cartItems, {...item, count: 1}]
}

export const removeItemAndDecreaseCount = (cartItems, itemToRemove) => {
  const findItemToRemove = cartItems.find(item => item.id === itemToRemove.id)
  if(findItemToRemove.count === 0) {
    return cartItems
  } 
  return cartItems.map(
    item => item.id === itemToRemove.id ? {...item, count: item.count - 1} : item
  )
}