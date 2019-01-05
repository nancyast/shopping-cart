import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const Nav = ({addedProducts})=>{
  let sumQuantity = 0;
  for(let item of addedProducts){
    sumQuantity += item.quantity;
  }
  return(
    <nav>
      <ul>
        <li>
          <div className="logo"></div>
        </li>
        <li><Link to="/">Shop</Link></li>
        <li className="cart">
          <Link to="/checkout/cart"><i className="fas fa-shopping-cart"></i></Link>
          <div className="num-item">{sumQuantity}</div>
        </li>
      </ul>
    </nav>
  );
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
)(Nav);