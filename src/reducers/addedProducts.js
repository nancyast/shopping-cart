import { ADD_TO_CART } from '../constants/action';

const addedProducts = (state = [], action) => {
  switch(action.type){
    case ADD_TO_CART:
      let {productId, quantity} = action;
      let newState = state.map(product => product);
      let productIDs = state.map(product => product.productId);

      let index = productIDs.indexOf(productId);
      if(index === -1){
        newState.push({productId, quantity});
      }
      else{
        newState[index].quantity += quantity;
      }

      console.log(newState);
      return newState;
    default:
      return state;
  }
}

export default addedProducts;