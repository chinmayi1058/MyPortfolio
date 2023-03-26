import { Button, Modal } from "react-bootstrap";
import fileSorter1 from "../img/AZ900.png";

export default function AppProfiler(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Microsoft Certified: Azure Fundamentals
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="view text-center">
          <img
            className="rounded mx-auto d-block inner-img"
            src={fileSorter1}
            alt="winFileSorter"
          />
        </div>
        <hr />
        <p>
        This exam measures your ability to describe the following: cloud concepts; Azure architecture and services; and Azure management and governance.

        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="m-auto">
          <Button className="btn-outline-primary">
            <a
              href="https://www.credly.com/badges/84ab6238-135c-4ad3-8648-686242bba390/public_url"
              id="source"
              target="_blank"
              rel="noreferrer"
            >
              My Verified Badge
              <i className="fab fa-github" />
            </a>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
