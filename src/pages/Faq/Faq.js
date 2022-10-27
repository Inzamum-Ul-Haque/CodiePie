import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./Faq.css";

const Faq = () => {
  return (
    <Container className="faq-container">
      <Accordion>
        <h1 className="text-center mb-4 fw-bold">Frequently Asked Questions</h1>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4 className="fw-semibold">How can you enroll a course?</h4>
          </Accordion.Header>
          <Accordion.Body>
            Below the course details section, there is button called 'Get
            Premium Access' which will take you to the checkout page. There you
            will provide your necessary information and and pay to enroll into
            the course.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4 className="fw-semibold">Can I get the course outline?</h4>
          </Accordion.Header>
          <Accordion.Body>
            Yes, you can get download the course outline from the course
            details. There is a button above the details section to download the
            course outline.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4 className="fw-semibold">
              Will the courses provide video content?
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            Yes, the courses are fully taken on live basis and the videos of the
            live classes will be provided afterwards.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h4 className="fw-semibold">
              Do all the courses have quiz or any online test?
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            Yes, it is mandatory by our policy to take necessary quiz or online
            test after every lesson by the course teacher.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h4 className="fw-semibold">
              Are the contents of the course forever accessible?
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            Yes, the course contents are fully accessible even after the course
            ends from anywhere.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h4 className="fw-semibold">
              Can we record the live classes of the courses?
            </h4>
          </Accordion.Header>
          <Accordion.Body>
            This is strictlly prohibited and we firmly advise you not to do this
            and if found out, necessary actions will be taken against you and
            you may lose your account forever.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faq;
