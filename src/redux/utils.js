export const addItemToCart = (cartItems, item) => {
  const alreadyThere = cartItems.find(
    cartItem => cartItem.id === item.id
  )

  if(alreadyThere) {
    return cartItems.map(cartItem => cartItem.id === item.id ? {...cartItem, count: cartItem.count + 1} : cartItem)
  }

  return [...cartItems, {...item, count: 1}]
}