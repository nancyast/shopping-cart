import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SelectedProduct from './SelectedProduct';
import Total from './Total';

class Cart extends Component{
  constructor(props){
    super(props);

  }

  render(){
      let addedProducts = this.props.addedProducts;
      console.log(addedProducts);
    return(
      <div className="cart-container">
        <h4>YOUR CART HAS {addedProducts.length} ITEMS</h4>
        <div className="selected-products">
          {
            addedProducts.map(product => {
              return <SelectedProduct product={product} key={product.productId}/>
            })
          }
        </div>
        <Total/>
        <div className="clear"></div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
   addedProducts: state.addedProducts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);