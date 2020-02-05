import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

const ProductPreview = ({
  name,
  price,
  picture
}) =>
  <Card>
    <div style={{ minHeight: '16em', display: 'flex', alignItems: 'center' }} >
      <Card.Img variant="top" src={picture || 'http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif'} />
    </div>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>{price}€</Card.Subtitle>
      <Button variant="primary"><FontAwesomeIcon icon={faSearch} /> Details</Button>
      <Button variant="success"><FontAwesomeIcon icon={faCartPlus} /> Add to cart</Button>
    </Card.Body>
  </Card>
;

export default ProductPreview;
