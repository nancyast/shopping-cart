import React, { Component } from 'react';
//import { Thumbnails } from './subComponents/Thumbnails';
//import { ProductDetail } from './subComponents/ProductDetail';

export default class SingleProduct extends Component {

  render(){

    return (
      <div className="product-content">
        <Thumbnails/>
        <ProductDetail/>
    </div>
    );
  }
}