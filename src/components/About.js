import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import img from "./img/me.jpeg";

export default function About() {
  return (
    <section id="About">
      <Container className="main-cont">
        <Row>
          <Col lg={6} sm={12}></Col>
          <Col lg={6} sm={12} className="text-center">
            <h1 className="header abtHeader font-weight-bold mt-5">About</h1>
            <hr className="abtLine underline" />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col lg={6} sm={12}>
              <div className="m-auto text-center gradient-border">
                <img
                  src={img}
                  className="abtimg"
                  alt="Chinmayi Alshetty"
                  title="Hey! 👋"
                />
              </div>
            </Col>
            <Col lg={6} sm={12}>
              <h5 className="text-center text-lg-start mt-4">
                Hey, It's me Chinmayi! I am a BTech student in Computer Science
                from MIT Academy Of Engineering Alandi Pune.
              </h5>
              <h5 className="text-center text-lg-start mb-4">
                I'm an enthusiastic software engineering student Always look
                forward for opportunities in innovative world to conribute with
                my knowledge and experience to solve problems.
              </h5>
              <Container className="text-center m-auto">
                <Row className="justify-content-evenly">
                  <Col md sm={12}>
                    <a
                      href="https://www.linkedin.com/in/chinmayi-alshetty/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-dark"
                    >
                      LinkedIn{" "}
                      <FontAwesomeIcon icon={faLinkedin} color="black" />
                    </a>
                  </Col>

                  <Col md sm={12}>
                    <a
                      href="https://github.com/chinmayi1058"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-dark"
                    >
                      Follow me
                      <FontAwesomeIcon icon={faGithub} color="black" />
                    </a>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
