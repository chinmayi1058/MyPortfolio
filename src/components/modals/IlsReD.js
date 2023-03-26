import { Button, Modal } from "react-bootstrap";
import ILS from "../img/Tkinter.png";

export default function IlsReD(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          AWS Managed Student System
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="view text-center">
          <img
            className="rounded mx-auto d-block inner-img"
            src={ILS}
            alt="Library management system"
          />
        </div>
        <hr />
        <p>
          1.The student Registration system is implemented using simple — Python
          User interface tkinter at front end.
          <br />
          2. Then the messages were stored in AWS SQS(Simple Queue Service) by
          providing the URL of the SQS .The Python code is written for the same.
          <br />
          3. Afterwards an AWS Lambda Function is written for storing these SQS
          messages in the DynamoDB Table which was created before.
          <br />
          4. Hence as soon as any messages from student registration system
          comes the messages will be stored in DynamoDB Table
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="m-auto">
          <Button className="btn-outline-primary">
            <a
              href="https://github.com/chinmayi1058/AWS_Registeration_Application"
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
