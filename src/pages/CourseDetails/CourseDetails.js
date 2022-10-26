import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import LeftCategoryBar from "../LeftCategoryBar/LeftCategoryBar";
import "./CourseDetails.css";

const CourseDetails = () => {
  const details = useLoaderData();
  const {
    id,
    course_title,
    course_teacher,
    image_url,
    start_date,
    lesson,
    rating,
    enrolled,
    course_details,
  } = details;
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <Container>
        <Row className="g-5">
          <Col className="categories-link-container p-3" lg={3}>
            <LeftCategoryBar categories={categories} />
          </Col>
          <Col lg={9} className="course-details-container pb-5">
            <div>
              <h1>{course_title}</h1>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  className="teacher-thumbnail"
                  src={course_teacher.image}
                  alt=""
                />
                <div className="mt-2">
                  <p className="mb-0 ms-2 fw-semibold">Teacher</p>
                  <p className="ms-2 fw-bold">{course_teacher.name}</p>
                </div>
              </div>
              <div>
                <p className="mb-0 fw-semibold">Created At:</p>
                <p className="mb-0 fw-bold">{start_date}</p>
              </div>
              <div>
                <p className="mb-0 fw-semibold">Review:</p>
                <p className="mb-0 fw-bold">
                  <FaStar className="text-warning" /> {rating}
                </p>
              </div>
            </div>
            <div className="course-image">
              <img src={image_url} alt="" />
            </div>
            <div className="course-overview">
              <h3 className="fw-bold">Course Overview</h3>
              <p>{course_details}</p>
              <p className="fw-semibold">Lesson: {lesson}</p>
              <p className="fw-semibold">Students Enrolled: {enrolled}</p>
            </div>
            <Link to={`/course_checkout/${id}`}>
              <Button className="premium-btn" variant="primary">
                Get Premium Access
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetails;
