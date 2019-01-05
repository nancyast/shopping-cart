export const INITIALIZE = "INITIALIZE";

export const initialize = (products) => {
  return {
    type: INITIALIZE,
    products
  }
};

export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = ({productId, quantity}) => {
  return {
    type: ADD_TO_CART,
    productId : productId,
    quantity : quantity
  }
}



