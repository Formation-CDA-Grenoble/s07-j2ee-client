import React, { Component } from 'react';
import Axios from 'axios';

class ProductForm extends Component {
  state = {
    product: {
      name: '',
      serialNumber: '',
      description: '',
      price: 0,
      stock: 0,
      weight: 0,
      picture: '',
      brand: { id: 1 }
    },
  }

  handleChange = (event) => {
    const { product } = this.state;
    product[event.target.name] = event.target.value;
    this.setState({ product });
  }

  handleSubmit = (event) => {
    const { product } = this.state;
    // Empêche la page de se recharger (comportement normale lors de la validation d'un formulaire)
    event.preventDefault();
    // Envoie le contenu du formulaire pour créer un nouveau produit
    Axios.post('http://localhost:8080/api/products', product)
    .then(response => console.log(response))
    .catch(error => console.error(error));
  }

  render() {
    const { name, serialNumber, price } = this.state.product;

    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name">Product name</label>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <label for="serialNumber">Serial Number</label>
        <input type="text" name="serialNumber" value={serialNumber} onChange={this.handleChange} />
        <label for="price">Price</label>
        <input type="number" name="price" value={price} onChange={this.handleChange} />
        <input type="hidden" name="stock" value={0} />
        <input type="submit" />
      </form>
    );
  }
}

export default ProductForm;
