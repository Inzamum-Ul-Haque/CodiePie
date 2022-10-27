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
    fetch("https://education-platform-server-iota.vercel.app/allCourses")
      .then((res) => res.json())
      .then((data) => setCourseData(data));
  }, []);

  return (
    <div>
      <Container>
        <Row className="g-md-5">
          <Col className="categories-link-container p-3" lg={3}>
            <LeftCategoryBar categories={categories} />
          </Col>
          <Col lg={9}>
            <Row>
              {courseData.map((course) => (
                <Col lg={6} sm={12} className="pt-0 pb-5" key={course.id}>
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
