import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="register-container">
      <div>
        <h2 className="text-center">Create a free account</h2>
      </div>
      <div className="form-container d-flex justify-content-center">
        <Form className="bg-white border border-secondary">
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="text"
              placeholder="Full name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="text"
              placeholder="photo URL"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="email"
              placeholder="e-mail address"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="password"
              placeholder="Re-type password"
              required
            />
          </Form.Group>
          <Form.Group
            className="mb-4 d-flex justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              type="checkbox"
              label="I agree to the Terms and Conditions"
            />
          </Form.Group>
          <Button className="w-100 signup-btn" variant="primary" type="submit">
            Sign Up
          </Button>
          <p className="text-center mt-3">
            Already in CodiePie ?{" "}
            <Link to="/signin" className="back-to-signin-text">
              Sign In
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
