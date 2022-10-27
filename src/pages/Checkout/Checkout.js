import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { course_title } = useLoaderData();

  const handleCheckout = (event) => {
    event.preventDefault();
  };

  return (
    <Container className="checkout-container ">
      <div>
        <h1 className="text-center">Checkout</h1>
        <h3 className="text-center">{course_title}</h3>
      </div>
      <div>
        <h5>Please provide your information down below to enroll</h5>
      </div>
      <form
        onSubmit={handleCheckout}
        class="row g-3  mt-2 mb-5 shadow rounded p-4"
      >
        <div class="col-md-6">
          <label class="form-label">Full name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your full name"
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Father's name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your father's name"
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Mother's name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter your mother's name"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Address 2
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            State
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Zip
          </label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Checkout
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Checkout;
