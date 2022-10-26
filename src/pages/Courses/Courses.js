import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import "./Courses.css";

const Courses = () => {
  const categories = useLoaderData();
  console.log(categories);

  return (
    <div>
      <Container>
        <Row>
          <Col className="categories-link-container p-3" lg={4} sm={2}>
            <div>
              <h4 className="text-center fw-bold">Categories</h4>
            </div>
            <ul className="categories-link mt-3">
              {categories.map((category) => (
                <li className="pb-4" key={category.category_id}>
                  <Link>{category.category_name}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={8} sm={10}>
            <Row>
              <Col>
                <CourseCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
