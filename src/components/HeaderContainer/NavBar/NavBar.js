import React from "react";
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import Logo from './Logo/Logo';
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <NavLink to="/"><Logo/></NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto barraNav">
              <NavLink className="menuBar menuLaterales" activeClassName="menuBarActive" to="/inicio">Inicio</NavLink>
              <NavDropdown title="Servicios" id="basic-nav-dropdown" className="menuBar">
                <NavDropdown.Item>
                  <NavLink className="subMenuBar" to="/catalogo/1">Sitios Web</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className="subMenuBar" to="/catalogo/2">Comercio electrónico</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className="subMenuBar" to="/catalogo/3">Aplicaciones Web</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className="subMenuBar" to="/catalogo/4">Aplicaciones Móviles</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="menuBar menuLaterales" activeClassName="menuBarActive" to="/contacto">Contáctenos</NavLink>
            </Nav>
          </Navbar.Collapse>
          <NavLink to="/carrito"><CartWidget/></NavLink>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
