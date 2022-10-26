import React from "react";
import { Button, Form } from "react-bootstrap";
import "./SignIn.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const SignIn = () => {
  const { signInUser, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="signin-container">
      <div>
        <h2 className="text-center">Sign In to get access</h2>
      </div>
      <div className="form-container d-flex justify-content-center">
        <Form
          onSubmit={handleSignIn}
          className="bg-white border border-secondary"
        >
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control
              className="form-control form-control-lg"
              type="email"
              name="email"
              placeholder="Username or Email"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicPassword">
            <Form.Control
              className="form-control form-control-lg"
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group
            className="mb-4 d-flex justify-content-between"
            controlId="formBasicCheckbox"
          >
            <Form.Check type="checkbox" label="Remember me" />
            <Link className="form-text">Forgot Password?</Link>
          </Form.Group>
          <Button className="w-100  signin-btn" variant="primary" type="submit">
            Login
          </Button>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <span>
              <Link to="/registration" className="form-text">
                Create an account
              </Link>
            </span>
          </p>
          <div className="divider my-5">
            <p>
              <span>Or</span>
            </p>
          </div>
          <div className="btn-third-party">
            <Button onClick={handleGoogleSignIn} className="w-100 mb-4">
              <FaGoogle /> Continue with Google
            </Button>
            <Button onClick={handleGithubSignIn} className="w-100  ">
              <FaGithub /> Continue with Github
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
