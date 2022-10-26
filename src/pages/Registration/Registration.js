import React from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Registration.css";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
  };

  return (
    <div className="register-container">
      <div>
        <h2 className="text-center">Create a free account</h2>
      </div>
      <div className="form-container d-flex justify-content-center">
        <Form
          onSubmit={handleSignUp}
          className="bg-white border border-secondary"
        >
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="text"
              name="fullName"
              placeholder="Full name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="text"
              name="photoURL"
              placeholder="photo URL"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="email"
              name="email"
              placeholder="e-mail address"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="password"
              name="confirmPassword"
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
