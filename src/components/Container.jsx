import React, { Component } from 'react';
import Axios from 'axios';
import Product from './Product';
import ProductForm from './ProductForm';

class Container extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    Axios.get('http://localhost:8080/api/products/3')
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }

  render() {
    return <ProductForm {...this.state.data} />;
  }
}

export default Container;
