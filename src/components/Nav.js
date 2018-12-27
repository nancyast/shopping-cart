import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SingleProduct from './SingleProduct';
import Shop from './Shop';

const Home = () => <h2>Home</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop/">Shop</Link>
          </li>
          <li>
            <Link to="/singleProduct/">SingleProduct</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/shop/" component={Shop} />
      <Route path="/singleProduct/" component={SingleProduct} />
    </div>
  </Router>
);

export default AppRouter;