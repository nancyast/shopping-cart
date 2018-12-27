import React, { Component } from 'react';

export default class Products extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let products = [
      {
        name: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
        price: 610.00,
        image: ""
      },
      {
        name: "Pryma Headphones, Rose Gold & Grey",
        price: 180.00,
        image: ""
      },
      {
        name: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
        price: 610.00,
        image: ""
      },
      {
        name: "Pryma Headphones, Rose Gold & Grey",
        price: 180.00,
        image: ""
      },
      {
        name: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
        price: 610.00,
        image: ""
      },
      {
        name: "Pryma Headphones, Rose Gold & Grey",
        price: 180.00,
        image: ""
      },
      {
        name: "Pryma Headphones, Rose Gold & Grey",
        price: 180.00,
        image: ""
      },
      {
        name: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
        price: 610.00,
        image: ""
      },
      {
        name: "Pryma Headphones, Rose Gold & Grey",
        price: 180.00,
        image: ""
      }
    ];
    return(
      <div className="product-list">
      {
        products.map((product, index)=>{
          return(
            <div className="product">
              <div className="product-name">
                <h4>{product.name}</h4>
                <h4>${product.price}</h4>
              </div>
              <div className="add-to-cart">ADD TO CART</div>
            </div>
          );
        })
      }
      </div>
    );
  }
}