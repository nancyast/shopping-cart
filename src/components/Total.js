import React, { Component } from 'react';

class Total extends Component{
  render(){
    return(
      <div className="total">
        <div>
          Total: <span>{'$145.89'}</span>
        </div>
        <div>
          <input type="text" placeholder="promotion code here"/>
          <button>Accept</button>
        </div>
        <div className="checkout">
          Check out
        </div>
      </div>
    );
  }
}

export default Total;