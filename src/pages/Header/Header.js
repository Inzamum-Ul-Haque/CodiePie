import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/codiepie-256.png";
import "./Header.css";

const Header = () => {
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
                <span className="title-left">Codie</span>Pie
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
          <Link to="/signin">
            <Button variant="outline-primary login-btn">Login</Button>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
