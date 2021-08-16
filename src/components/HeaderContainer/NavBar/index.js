import React from "react";
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import Logo from './Logo';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
          <Logo/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto barraNav">
              <Nav.Link href="#home" className="menuBar">Inicio</Nav.Link>
              <NavDropdown title="Servicios" id="basic-nav-dropdown" className="menuBar">
                <NavDropdown.Item href="#action/3.1">
                  Sitios Web
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">
                  Comercio electrónico
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">
                  Aplicaciones Web
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Aplicaciones Móviles
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link" className="menuBar">Contáctenos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#carrito">
          <CartWidget/>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
