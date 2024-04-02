import React, { useState } from "react";
import { Navbar as RBNavbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import '../components/Navbar.css'
const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <RBNavbar  expand="lg" expanded={expanded}>
      <RBNavbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
      />
      <RBNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto vasim">
          <NavLink className="nav-link" to="/" onClick={closeNavbar}>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
            About
          </NavLink>
          {!isAuthenticated ?(
            <NavLink className="nav-link" to="/services" onClick={closeNavbar}>
              Services
            </NavLink>
          ):(
           <NavLink className="nav-link" to="/easybuy" onClick={closeNavbar}>
              EasyBuy
            </NavLink>
          )
          }
          {!isAuthenticated ? (
            <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>
              Contact
            </NavLink>
          ):(
            <NavLink className="nav-link" to='/easysell' onClick={closeNavbar}
            >EasySell</NavLink>
          )
          }
        
        </Nav>
        <Nav className="m">
          {isAuthenticated ? (
            <NavDropdown title={user.name} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => { logout({ returnTo: window.location.origin }); closeNavbar(); }}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Button variant="outline-primary" onClick={() => { loginWithRedirect(); closeNavbar(); }}>
              Login
            </Button>
          )}
        </Nav>
      </RBNavbar.Collapse>
      {expanded && ( // Render the close button only when Navbar is expanded
        <Button variant="link" onClick={closeNavbar} className="ml-auto mr-3">
          Close
        </Button>
      )}
    </RBNavbar>
  );
};

export default Navbar;
