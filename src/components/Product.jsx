import React from 'react';

const Product = (props) =>
  <div>
    <h1>{props.name}</h1>
    <div>Serial Number: {props.serialNumber}</div>
    <div>Description: {props.description}</div>
    <div>Price: {props.price}</div>
  </div>
;

export default Product;
