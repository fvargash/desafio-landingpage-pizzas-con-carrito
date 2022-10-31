import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  const setActive = ({ isActive }) => (isActive ? "active" : "noactive"); 
    return(
      <Navbar bg="black" expand="lg">
        <Container>
          <Link>
            <img src='./img/pizza.png' alt='#' width="80px"/>      
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink  className={setActive} to="/" end style={{textDecoration:'none'}}>Home</NavLink> 
              <NavLink to="/Carrito" className={setActive} style={{textDecoration:'none'}}>Carrito</NavLink>               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;