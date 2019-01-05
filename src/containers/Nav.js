import React from 'react';
import { Link } from "react-router-dom";


const Nav = ()=>{
  return(
    <nav>
      <ul>
        <li>
          <div className="logo"></div>
        </li>
        <li><Link to="/">Shop</Link></li>
        <li className="cart">
          <Link to="/checkout/cart"><i className="fas fa-shopping-cart"></i></Link>
          <div className="num-item">1</div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;