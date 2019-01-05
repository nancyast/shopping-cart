import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/action';

const addedProducts = (state = [], action) => {
  let newState = [];
  switch(action.type){
    case ADD_TO_CART:
      let {productId, quantity} = action;
      newState = state.map(product => product);
      let productIDs = state.map(product => product.productId);

      let index = productIDs.indexOf(productId);
      if(index === -1){
        newState.push({productId, quantity});
      }
      else{
        newState[index].quantity += quantity;
      }

      console.log("cart", newState);
      return newState;
    case REMOVE_FROM_CART:
      for(let product of state){
        if(product.productId === action.productId){
          // do nothing
        }
        else{
          newState.push(product);
        }
      }
      return newState;
    default:
      return state;
  }
}

export default addedProducts;