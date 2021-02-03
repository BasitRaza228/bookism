import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import  "../App.css";

function NavBar() {
  return (
    <> 
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Bookism</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link className="Navbar-links active" href="#home">Home</Nav.Link>
      <Nav.Link className="Navbar-links" href="#features">Gallery</Nav.Link>
      <Nav.Link className="Navbar-links" href="#pricing">About</Nav.Link>
      <Nav.Link className="Navbar-links" href="#pricing">Contact Us</Nav.Link>
    </Nav>
  </Navbar>
    </>
    );
}

export default NavBar;