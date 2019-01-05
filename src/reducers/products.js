import { INITIALIZE } from '../constants/action';

const products = (state = [], action) => {
  switch(action.type){
    case INITIALIZE:
    let newState = action.products;
      return newState;
    default:
      return state;
  }
}

export default products;