import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const { course_title } = useLoaderData();

  return (
    <div>
      <Container>
        <div>
          <h1>Checkout</h1>
          <h3>Course Name: {course_title}</h3>
        </div>
        <div>
          <h3>Please provide your information down below</h3>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
