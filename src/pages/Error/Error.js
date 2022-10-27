import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import errorImg from "../../assets/images/error.png";
import "./Error.css";

const Error = () => {
  return (
    <Container className="error-container d-flex flex-column justify-content-center align-items-center">
      <div>
        <img src={errorImg} alt="" />
      </div>
      <div className="text-center">
        <h1>Page Not Found!</h1>
        <p>Please try searching for some other page.</p>
        <Link to="/">
          <Button variant="primary">Back to home</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Error;
