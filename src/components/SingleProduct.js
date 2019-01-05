import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import Thumbnails from './Thumbnails';

export default class SingleProduct extends Component{
  constructor(props){
    super(props)
    this.state = {
      product : null
    }
  }

  componentDidMount(){
    let id = this.props.match.params.id;
    const url = "https://nordic-shop-api.herokuapp.com/";
    let query = `query product {
      product (productId : "${id}") {
        id
        name
        rating
        price
        images {
          url
          alt
        }
      }
    }`;

    fetch(url,{
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          variables: {},
          query: query,
        })
    }).then(response => response.json())
      .then(json => {
        this.setState({
          product: json.data.product
        })
    })
  }

  render(){
    const product = this.state.product;
    return(product &&
        (
          <div className="product-content">
            <Thumbnails product={product}/>
            <ProductDetail product={product}/>
          </div>
        )
      )
  }
}
