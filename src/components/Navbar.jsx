import React from 'react';
import { Navbar } from 'react-bootstrap';

const MyNavbar = ({ user }) =>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      CDA Shop
    </Navbar.Brand>
    {user && 
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">{user.username}</a>
        </Navbar.Text>
      </Navbar.Collapse>
    }
  </Navbar>
;

export default MyNavbar;
