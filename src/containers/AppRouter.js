import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { initialize } from "../constants/action";
import Shop from './Shop';
import Home from './Home';
import Nav from './Nav';
import SingleProduct from '../components/SingleProduct';
import Cart from '../components/Cart';

class AppRouter extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : []
    }
  }

  /*
  async componentDidMount(){
    const url = "https://nordic-shop-api.herokuapp.com/";
    let query = `query products {
      products {
        id
        name
        description
        rating
        price
        images {
          url
          alt
        }
      }
    }`;

    const response = await fetch(url,{
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
    });
    const json = await response.json();
    this.setState({
      products : json.data
    });

    console.log("products)", this.state.products);
  }
  */

  componentDidMount(){
    const url = "https://nordic-shop-api.herokuapp.com/";
    let query = `query products {
      products {
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
        let products = [];
        Object.values(json.data.products).forEach(product => {
          products.push(product);
        });
        this.props.initialize(products);
    })
  }

  render(){
    return(
        <BrowserRouter>
            <div>
                <Nav/>
                <Route exact path="/"  component={Home} />
                <Route path="/productlist" component={Shop} />
                <Route path={`/product/:id`} component={SingleProduct}/>
                <Route path={'/checkout/cart'} component={Cart}/>
            </div>
        </BrowserRouter>
    );
  }
};

function mapStateToProps(state) {
  return {
    products : state.products
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initialize }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
