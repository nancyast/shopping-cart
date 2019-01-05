import React, { Component } from 'react';

class QuantityInput extends Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
      <div className="quantity">
        Quantity:
        <div className="input">
          <div onClick={()=>{this.props.onClick(false)}}>-</div>
          <div>{this.props.value || 1}</div>
          <div onClick={()=>{this.props.onClick(true)}}>+</div>
        </div>
      </div>
    );
  }
}

export default QuantityInput;