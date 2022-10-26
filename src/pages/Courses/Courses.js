import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import LeftCategoryBar from "../LeftCategoryBar/LeftCategoryBar";
import "./Courses.css";

const Courses = () => {
  const categories = useLoaderData();
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allCourses")
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);

  return (
    <div>
      <Container>
        <Row className="g-5">
          <Col className="categories-link-container p-3" lg={3} sm={2}>
            <LeftCategoryBar categories={categories} />
          </Col>
          <Col lg={9} sm={10}>
            <Row lg={2} sm={1}>
              {courseData.map((course) => (
                <Col className="pt-0 pb-5" key={course.id}>
                  <CourseCard course={course} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
