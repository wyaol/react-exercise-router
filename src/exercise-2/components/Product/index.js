import React, { Component } from 'react';
import data from '../../mockups/data.json';

class Product extends Component {
  state = {
    product: {}
  }

  componentDidMount() {
    const id = window.location.pathname.split('/')[2];
    const productTmp = Object.entries(data).find(item => (item[1].id).toString() === id);
    this.setState({
      product: Object.assign({ name: productTmp[0] }, productTmp[1])
    });
  }

  render() {
    return (
      <div>
        {Object.entries(this.state.product).map((keyValue, index) => (
          <div key={index}>
            <span>{keyValue[0]}</span> : <span>{keyValue[1]}</span>
          </div>
        ))}
      </div>
    );
  }
  

  
}

export default Product;