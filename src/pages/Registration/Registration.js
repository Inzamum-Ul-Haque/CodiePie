import React from "react";
import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Registration.css";

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        updateUserData(fullName, photoURL);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateUserData = (fullName, photoURL) => {
    const profile = {
      displayName: fullName,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
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
          <Form.Group className="mb-4">
            <Form.Control
              className="form-control form-control-lg"
              type="text"
              name="fullName"
              placeholder="Full name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              className="form-control form-control-lg"
              type="text"
              name="photoURL"
              placeholder="photo URL"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              className="form-control form-control-lg"
              type="email"
              name="email"
              placeholder="e-mail address"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              className="form-control form-control-lg"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              className="form-control form-control-lg"
              type="password"
              name="confirmPassword"
              placeholder="Re-type password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-4 d-flex justify-content-between">
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
