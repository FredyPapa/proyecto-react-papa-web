import React, { useContext } from "react";
import { Container, NavDropdown, Nav, Navbar } from "react-bootstrap";
import Logo from './Logo/Logo';
import CartWidget from './CartWidget/CartWidget';
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

function NavBar() {
  //
  const {items} = useContext(CartContext);
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
                  <NavLink className="subMenuBar" to="/catalogo/P9cjMGN5oQiMtjhJwqAH">Sitios Web</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className="subMenuBar" to="/catalogo/UKkfyOSNTG6RXffHcf2N">Comercio electrónico</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className="subMenuBar" to="/catalogo/uWFWjPqWI9VoW2V6YcdT">Aplicaciones Web</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <NavLink className="subMenuBar" to="/catalogo/eD0RjJfmtGnIAsovaBXh">Aplicaciones Móviles</NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink className="menuBar menuLaterales" activeClassName="menuBarActive" to="/contacto">Contáctenos</NavLink>
            </Nav>
          </Navbar.Collapse>
          {items.length?<NavLink to="/carrito"><CartWidget/></NavLink>:<></>}
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
