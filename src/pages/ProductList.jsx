import React, { Component } from 'react';
import Axios from 'axios';
import ProductPreview from '../components/ProductPreview';
import { Container } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

export default class ProductList extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/api/products')
    .then(response => this.setState({ data: response.data }))
    .catch(error => console.error(error));
  }

  render() {
    const { data } = this.state;

    if (data === null) {
      return (
        <Container>
          <Loader
            type="Puff"
            color="#00BFFF"
            height={80}
            width={80}
            style={{ textAlign: 'center' }}
          />
        </Container>
      );
    }

    return (
      <Container style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '1em'
      }}>
        {data.map( (product, index) => 
          <ProductPreview key={`product${index}`} {...product} />
        )}
      </Container>
    );
  }
}
;