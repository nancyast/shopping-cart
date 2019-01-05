import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import {removeFromCart} from '../constants/action';


class Cart extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: []
    }
  }

  getAddedProducts(){
    let addedProducts = [];
    let addedProductIds = this.props.addedProducts;
    addedProductIds.map(product => {
      const url = "https://nordic-shop-api.herokuapp.com/";
      let query = `query product {
        product (productId : "${product.productId}") {
          id
          name
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
        addedProducts.push(json.data.product);
        this.setState({
          products: addedProducts
        });
      })
      return 1;
    });
  }
  componentDidMount(){
    this.getAddedProducts();
  }

  handleDelete(id){
    this.props.removeFromCart(id);
    let newState = [];
    let currentState = this.state.products;

    for(let product of currentState){
      if(product.id === id){
        // do nothing
      }
      else{
        newState.push(product);
      }
    }
    this.setState({
      products: newState
    });
  }
  render(){
    let quantitys = this.props.addedProducts.map(item => item.quantity);
    let addedProducts = this.state.products;
    let prices = addedProducts.map(item => item.price);
    let total = 0;
    quantitys.map((quantity, index) =>{
      total += quantity * prices[index];
      return 1;
    });

    let cart = (addedProducts.length === 0 ? (
      <div className="cart-container">
        <h3 className="no-item">YOUR CART HAS NO ITEM</h3>
        <div className="continue-shopping">
          <i className="fas fa-shopping-cart"></i>
          <Link to="/productlist">
            <button>Continue shopping !</button>
          </Link>
        </div>
      </div>
    ) : (
      <div className="cart-container">
        <div className="selected-products">
          {
            addedProducts.map((product, index) => {
              const style = {
                backgroundImage: `url("${product.images[0].url}")`,
                backgroundSize: 'cover'
              }
              let quantity = quantitys[index];
              let price = product.price;
              return(
                <div className="product">
                  <Link to={`/product/${product.id}`}>
                    <div className="image" style={style}></div>
                  </Link>
                  <div className="infor">
                    <Link to={`/product/${product.id}`}>
                      <h4>{product.name}</h4>
                    </Link>
                    <h4>$ {product.price}</h4>
                    <h4 className="delete" onClick={()=>{this.handleDelete(product.id)}}>Delete</h4>
                  </div>
                  <div className="total-price">
                    <h4>Quantity : {quantity}</h4>
                    <h4>Total price: <span>{`$ ${(quantity * price).toFixed(2)}`}</span></h4>
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="total">
          <div>Total: <span>{`$ ${total.toFixed(2)}`}</span></div>
          <div className="checkout">Check out</div>
        </div>
        <div className="clear"></div>
      </div>
    ));

    return( cart );
  }
}


function mapStateToProps(state) {
  return {
   addedProducts: state.addedProducts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeFromCart }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);