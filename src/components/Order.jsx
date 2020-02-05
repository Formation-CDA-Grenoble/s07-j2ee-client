import React, { Component } from 'react';
import Axios from 'axios';
import { Container } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import ProductPreview from './ProductPreview';

export default class Order extends Component {
  state = {
    data: null,
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    Axios.get(`http://localhost:8080/api/orders/${id}`)
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
      <Container>
        <h1>Your order</h1>
        <h2>Reference: {data.reference}</h2>
        <Container style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '1em'
        }}>
          {data.products.map( (product, index) => 
            <ProductPreview key={`product${index}`} {...product} insideOrder={true} />
          )}
        </Container>
      </Container>
    );
  }
}
