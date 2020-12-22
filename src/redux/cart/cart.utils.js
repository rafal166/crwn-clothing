export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    // check if any cartItem exist already in array
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem)
    // if yes, create and return new array with new item
    return cartItems.map((
      cartItem // map return new array
    ) =>
      cartItem.id === cartItemToAdd.id // if current item id == new item id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
