import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import homeImg from "../../assets/images/home-img.svg";

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="col" sm={12} lg={6}>
            <div>
              <h2 className=" home-title">
                <span className="yellow-shape">
                  <span className="span-left">Codie</span>
                  <span className="span-right">Pie</span>
                  <img
                    src="https://react-educal.netlify.app/assets/img/shape/yellow-bg.png"
                    alt=""
                  />
                </span>{" "}
                The best platform to learn Web Development and more!!!
              </h2>
              <p className="home-text">
                Over 80+ courses related to web dev, client or frontend, server
                or backend, database etc which are created by renowned teachers
                from renowned institutes.
              </p>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="img-container d-flex justify-content-center">
              <img className="" src={homeImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
