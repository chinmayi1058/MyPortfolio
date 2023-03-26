import { Button, Modal } from "react-bootstrap";
import appProfiler from "../img/AWSCCP.png";

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
          AWS Certified Cloud Practitioner Issued by Amazon Web Services
          Training and Certification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="view text-center">
          <img
            className="rounded mx-auto d-block inner-img"
            src={appProfiler}
            alt="appProfiler"
          />
        </div>
        <hr />
        <p>
          The AWS Certified Cloud Practitioner offers a foundational
          understanding of AWS Cloud concepts, services, and terminology. This
          is a good starting point for individuals in non-technical roles with
          no prior IT or cloud experience or for those with on-premises IT
          experience looking for basic AWS Cloud fluency.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="m-auto">
          <Button className="btn-outline-primary">
            <a
              href="https://www.credly.com/badges/ed2938a8-209f-4c8f-a668-b9bcab3f55c7/public_url"
              id="source"
              target="_blank"
              rel="noreferrer"
            >
              my Verfied Badge <i className="fab fa-github" />
            </a>
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
