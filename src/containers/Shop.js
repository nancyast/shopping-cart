import React, { Component } from 'react';
import Filters from '../components/Filters';
import Controls from '../components/Controls';
import ProductList from '../components/ProductList';

class Shop extends Component {
  render(){
    return(
      <div className="shop-container">
        <Filters/>
        <Controls/>
        <ProductList />
      </div>
    );
  };
}

export default Shop;
