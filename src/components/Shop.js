import React, { Component } from 'react';
import Filters from './subComponents/Filters';
import Controls from './subComponents/Controls';
import Products from './subComponents/Products';

export default class Shop extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="shop-container">
        <Filters/>
        <Controls/>
        <Products/>
      </div>
    );
  }
}