import React, { Component } from 'react';
import QuantityInput from './QuantityInput';

class SelectedProduct extends Component{
  render(){
    let quantity = this.props.product.quantity;
    console.log(quantity);
    return(
      <div className="product">
        <div className="image"></div>
        <div className="infor"></div>
        <div className="total-price">
          <QuantityInput value={quantity}/>
          <h4>Total price: <span>{'$123.33'}</span></h4>
        </div>
      </div>
    );
  }
}

export default SelectedProduct;