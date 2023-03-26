import { Button, Modal } from "react-bootstrap";
import eduHub from "../img/CoolCoders.png";

export default function EduHub(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">reddiTalk</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="view text-center">
          <img
            className="rounded mx-auto d-block inner-img"
            src={eduHub}
            alt="EduHub"
          />
        </div>
        <hr />
        <p>
          CourseFlix is the Netflix of Courses Where multiple Courses can be
          bought by the students and also the Course Instructors can register
          themselves by fulfilling the requirement of qualifications.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="m-auto">
          <Button className="btn-outline-primary">
            <a
              href="https://github.com/chinmayi1058/Courseflix"
              id="source"
              target="_blank"
              rel="noreferrer"
            >
              Source Code <i className="fab fa-github" />
            </a>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
