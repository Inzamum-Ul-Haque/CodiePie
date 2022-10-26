import React from "react";
import { Card } from "react-bootstrap";
import { FaArrowRight, FaBook, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  const {
    id,
    image_url,
    course_title,
    course_teacher,
    lesson,
    rating,
    rating_count,
  } = course;
  return (
    <Card className="card-container shadow-lg bg-body rounded">
      <Card.Img className="course-thumbnail" variant="top" src={image_url} />
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between">
          <div>
            <p className="text-muted">
              <FaBook /> {lesson} Lesson
            </p>
          </div>
          <div>
            <p className="text-muted">
              <FaStar className="text-warning" /> {rating} ({rating_count})
            </p>
          </div>
        </div>
        <Card.Title className="mb-4 course-title">{course_title}</Card.Title>
        <div className="d-flex align-items-center course-teacher-info">
          <img src={course_teacher.image} alt="" />
          <p className="ms-3 mb-0">{course_teacher.name}</p>
        </div>
      </Card.Body>
      <Card.Footer className="p-4">
        <div className="d-flex justify-content-end">
          <Link to={`/course_details/${id}`}>
            Know details <FaArrowRight />
          </Link>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;
