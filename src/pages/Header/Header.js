import React from "react";
import { useContext } from "react";
import {
  Button,
  Image,
  NavDropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/codiepie-256.png";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const activeStyle = {
    fontWeight: "bold",
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="shadow p-3 mb-5 bg-body rounded"
      >
        <Container className="header-container">
          <Navbar.Brand className="header-brand">
            <Link className="name-logo" to="/">
              <img src={logo} alt="" />
              <span>
                <span className="title-left">Codie</span>
                Pie
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto nav-links">
              <NavLink
                className="center-nav"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink
                className="center-nav"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/faq"
              >
                FAQ
              </NavLink>
              <NavLink
                className="center-nav"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/blog"
              >
                Blog
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          {user && user.uid ? (
            <NavDropdown
              className="dropdown-nav-links"
              title={
                user.photoURL ? (
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="button-tooltip-2">
                        {user.displayName}
                      </Tooltip>
                    }
                  >
                    <Image
                      roundedCircle
                      src={user.photoURL}
                      style={{ width: "30px", height: "30px" }}
                    />
                  </OverlayTrigger>
                ) : (
                  <FaUserCircle style={{ width: "30px", height: "30px" }} />
                )
              }
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={handleSignOut}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Link to="/signin">
              <Button variant="outline-primary login-btn">Login</Button>
            </Link>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
