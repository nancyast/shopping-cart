import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../constants/action";


class ProductList extends Component {

  render(){
    return(
      <div className="product-list">
        {
          this.props.products.map((product, index) => {
            const style = {
              backgroundImage: `url("${product.images[0].url}")`,
              backgroundSize: 'cover'
            }
            return (
              <Link to={`/product/${product.id}`} key={index}>
                <div className="product">
                  <div className="product-image" style={style}></div>
                  <div className="product-name" >
                    <h4>{product.name}</h4>
                    <h4>${product.price}</h4>
                  </div>
                  <div className="add-to-cart" onClick={()=>{this.props.addToCart(product.id, 1)}}>ADD TO CART</div>
                </div>
              </Link>
            )
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products : state.products
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);

