import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


const Nav = ()=>{
  return(
    <nav>
      <ul>
        <li>LOGO</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/productlist">Shop</Link></li>
        <li className="cart"><Link to="/checkout/cart"><i class="fas fa-shopping-cart"></i></Link></li>
      </ul>
    </nav>
  );
}

export default Nav;