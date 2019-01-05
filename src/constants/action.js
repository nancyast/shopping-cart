export const INITIALIZE = "INITIALIZE";

export const initialize = (products) => {
  return {
    type: INITIALIZE,
    products
  }
};

export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = ({id, quantity}) => {
  return {
    type: ADD_TO_CART,
    productId : id,
    quantity : quantity
  }
}

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    productId : id
  }
}



