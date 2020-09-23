import React, { Component } from 'react';
import data from '../../mockups/data.json';
import {Link} from 'react-router-dom';


class Products extends Component {

  state = {
    products: {}
  }

  componentDidMount() {
    this.setState({
      products: data
    })
  }

  render() {
    return (
      <div>
        <h4>All Products:</h4>
        {Object.entries(this.state.products).map((keyProduct, index) => (
          <div key={index}>
            <Link to={{
              pathname:`/products/${keyProduct[1].id}`,
              state: {
                name: keyProduct[0],
              }
            }}>
              {keyProduct[0]}
            </Link>
          </div>
          
        ))}
      </div>
    );
  }
}

export default Products;