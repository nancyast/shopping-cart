import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
            let obj = {id: product.id, quantity: 1};
            return (
                <div className="product" key={index}>
                  <Link to={`/product/${product.id}`}>
                    <div className="product-image" style={style}></div>
                    <div className="product-name" >
                      <h4 style={{height : "36px"}}>{product.name}</h4>
                      <h4 style={{color: "#d06236", marginTop: "8px"}}>${product.price}</h4>
                    </div>
                  </Link>
                  <div className="add-to-cart" onClick={()=>{this.props.addToCart(obj)}}>ADD TO CART</div>
                </div>
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

