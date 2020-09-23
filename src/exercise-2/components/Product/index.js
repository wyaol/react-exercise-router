import React, { Component } from 'react';
import data from '../../mockups/data.json';

class Product extends Component {

  render() {
    const id = window.location.pathname.split('/')[2];
    const productTmp = Object.entries(data).filter(item => {
      return item[1].id == id;
    });
    const product = Object.assign({ name: productTmp[0][0] }, productTmp[0][1]);
    
    return (
      <div>
        {Object.entries(product).map((keyValue, index) => (
          <div key={index}>
            <span>{keyValue[0]}</span> : <span>{keyValue[1]}</span>
          </div>
        ))}
      </div>
    );
  }
  

  
}

export default Product;