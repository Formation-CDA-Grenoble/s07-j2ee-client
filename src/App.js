import React, { Component } from 'react';
// import Container from './components/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import Navbar from './components/Navbar';
import Axios from 'axios';
import OrderList from './components/OrderList';
import Order from './components/Order';

export default class App extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/api/users/1')
    .then(response => this.setState({ user: response.data }))
    .catch(error => console.error(error));
  }

  render() {
    const { user } = this.state;

    return (
      <BrowserRouter>
        <Navbar user={user} />
        <Switch>
          <Route exact path='/products' component={ProductList} />
          <Route exact path='/orders'>
            <OrderList user={user} />
          </Route>
          <Route exact path='/orders/:id' component={Order} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
