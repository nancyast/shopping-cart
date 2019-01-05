import products from './products';
import addedProducts from './addedProducts';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
  {
    products,
    addedProducts
  }
);

export default rootReducer;