import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToCart } from "../constants/action";
import QuantityInput from './QuantityInput';

class ProductDetail extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity: 1
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(increase){
    if(increase){
      this.setState({
        quantity : this.state.quantity + 1
      })
    }
    else if(this.state.quantity > 1){
      this.setState({
        quantity : this.state.quantity - 1
      })
    }
  }
  render(){
    let productId = this.props.product.id;
    let quantity = this.state.quantity;
    return(
      <div className="product-detail">
        <h4>Pocket cotton sweatshirt</h4>
        <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
        <div className="price">$495.00</div>
        <div>Select color:
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <QuantityInput onClick={this.handleChange} value={this.state.quantity}/>
        <div className="addToCart" onClick={()=> this.props.addToCart({productId, quantity})}>Add to cart</div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return null;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);