import React, { Component } from 'react';

export class ProductDetail extends Component {
  render(){
    return(
      <div className="product-detail">
        <h4>Pocket cotton sweatshirt</h4>
        <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
        <div>$495.00</div>
        <div>Select color:
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          Quantity:
          <div>-</div>
          <div>1</div>
          <div>+</div>
          <div>Add to cart</div>
        </div>
      </div>
    );
  }
}