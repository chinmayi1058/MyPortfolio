import { Button, Modal } from "react-bootstrap";
import reddiTalk from "../img/ChatRooms.png";

export default function ReddiTalk(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          ChattingRooms
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="view text-center">
          <img
            className="rounded mx-auto d-block inner-img"
            src={reddiTalk}
            alt="ChattingRooms"
          />
        </div>
        <hr />
        <p>
          ChattingRooms is a <b>Group chatting application</b> with similarities
          to <b>Telegram community structure</b> which means it is open to all
          discussion application with support of chatting with individual users
          as well. It has 2 subdivisions which are <b>Server interface</b>{" "}
          containing API calls for the client and database for user data and the{" "}
          <b>Client interface</b> which will offer the functionalities to user.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <div className="m-auto"></div>
      </Modal.Footer>
    </Modal>
  );
}
