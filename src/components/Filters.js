import React, { Component } from 'react';

export default class Filters extends Component {


  render(){
    return(
      <div className="filters">
        <div className="category-filter">
          <h3>Product Category</h3>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Accessories</li>
            <li>New Arivals</li>
            <li>Collection</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="price-filter">
          <h3>Filter By Price</h3>
          <button>Filter</button>
        </div>
        <div className="size-filter">
          <h3>Size</h3>
        </div>
        <div className="color-filter">
          <h3>Color</h3>
        </div>
      </div>
    );
  }
}