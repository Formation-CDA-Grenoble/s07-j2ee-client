import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderList = ({ user }) =>
  <Container>
    <h1>Your orders</h1>
    <ListGroup>
      {user && user.orders.map( (order, index) =>
        <ListGroup.Item key={`order${index}`}>
          Reference: <Link to={`/orders/${order.id}`}>{order.reference}</Link> ordered on {order.date}
        </ListGroup.Item>
      )}
    </ListGroup>
  </Container>
;

export default OrderList;
