import React from "react";
import { Container, Button } from "react-bootstrap";

import appProfiler from "./img/AWSCCP.png";
import fileSorter from "./img/AI900.png";
import fileSorter1 from "./img/AZ900.png";
import ILS from "./img/Tkinter.png";
import reddiTalk from "./img/ChatRooms.png";
import EduHub from "./img/CoolCoders.png";

import IlsReDModal from "./modals/IlsReD";
import ReddiTalkModal from "./modals/ReddiTalk";
import AppProfilerModal from "./modals/AppProfiler";
import FileSorterModal from "./modals/FileSorter";
import FileSorterModal1 from "./modals/FileSorter1";
import EduHubModal from "./modals/EduHub";

export default function Projects() {
  const [showIlsModal, setShowIlsModal] = React.useState(false);
  const [showRedModal, setShowRedModal] = React.useState(false);
  const [showAppModal, setShowAppModal] = React.useState(false);
  const [showFileModal, setShowFileModal] = React.useState(false);
  const [showFile1Modal, setShowFile1Modal] = React.useState(false);
  const [showEduModal, setShowEduModal] = React.useState(false);

  return (
    <section id="Projects">
      <Container className="text-center main-cont">
        <h1 className="header heading font-weight-bold mt-5">
          Projects
          <hr className="underline" />
        </h1>
        <div className="row">
          <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
            <div className="card">
              <div className="view overlay">
                <img
                  className="projectImg"
                  src={ILS}
                  alt="Student management system"
                />
              </div>
              <div className="card-body">
                <div className="card-text">
                  <h2 className="header font-weight-bold card-title text-dark">
                    Management System
                  </h2>
                  <hr />
                  <div className="column">
                    <p className="h5 text-dark">Management Software</p>
                  </div>
                  <p>AWS | Python Tkinter | Dynamodb</p>
                </div>
                <Button variant="dark" onClick={() => setShowIlsModal(true)}>
                  Details
                </Button>
                <IlsReDModal
                  show={showIlsModal}
                  onHide={() => setShowIlsModal(false)}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
            <div className="card">
              <div className="view overlay">
                <img className="projectImg" src={reddiTalk} alt="reddiTalk" />
              </div>
              <div className="card-body">
                <div className="card-text">
                  <h2 className="header font-weight-bold card-title text-dark">
                    ChattingRooms
                  </h2>
                  <hr />
                  <div className="column">
                    <p className="h5 text-dark">Group Chatting Software</p>
                  </div>
                  <p className="text-grey">ReactJs | Nodejs | Socket</p>
                </div>
                <Button variant="dark" onClick={() => setShowRedModal(true)}>
                  Details
                </Button>
                <ReddiTalkModal
                  show={showRedModal}
                  onHide={() => setShowRedModal(false)}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
            <div className="card">
              <div className="view overlay">
                <img className="projectImg" src={EduHub} alt="EduHub" />
              </div>
              <div className="card-body">
                <div className="card-text">
                  <h2 className="header font-weight-bold card-title text-dark">
                    CourseFlix
                  </h2>
                  <hr />
                  <div className="column">
                    <p className="h5 text-dark">Educational Courses Website</p>
                  </div>
                  <p className="text-grey">ReactJS</p>
                </div>
                <Button variant="dark" onClick={() => setShowEduModal(true)}>
                  Details
                </Button>
                <EduHubModal
                  show={showEduModal}
                  onHide={() => setShowEduModal(false)}
                />
              </div>
            </div>
          </div>
          <h1 className="header heading font-weight-bold mt-5">
            Certifications
            <hr className="underline" />
          </h1>
          <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
            <div className="card">
              <div className="view overlay">
                <img
                  className="projectImg"
                  src={appProfiler}
                  alt="Application Profile Launcher"
                />
              </div>
              <div className="card-body">
                <div className="card-text">
                  <h2 className="header font-weight-bold card-title text-dark">
                    AWS Certified Cloud Practitioner
                  </h2>
                  <hr />
                  <div className="column">
                    <p className="h5 text-dark">Cloud Computing</p>
                  </div>
                </div>
                <Button variant="dark" onClick={() => setShowAppModal(true)}>
                  Details
                </Button>
                <AppProfilerModal
                  show={showAppModal}
                  onHide={() => setShowAppModal(false)}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
            <div className="card">
              <div className="view overlay">
                <img
                  className="projectImg"
                  src={fileSorter}
                  alt="Window's File Sorter"
                />
              </div>
              <div className="card-body">
                <div className="card-text">
                  <h2 className="header font-weight-bold card-title text-dark">
                    Microsoft Certified: Azure AI Fundamentals
                  </h2>
                  <hr />
                  <div className="column">
                    <p className="h5 text-dark">Azure </p>
                  </div>
                </div>
                <Button variant="dark" onClick={() => setShowFileModal(true)}>
                  Details
                </Button>
                <FileSorterModal
                  show={showFileModal}
                  onHide={() => setShowFileModal(false)}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-xs-12 p-4">
            <div className="card">
              <div className="view overlay">
                <img
                  className="projectImg"
                  src={fileSorter1}
                  alt="Window's File Sorter"
                />
              </div>
              <div className="card-body">
                <div className="card-text">
                  <h2 className="header font-weight-bold card-title text-dark">
                    Microsoft Certified: Azure Fundamentals
                  </h2>
                  <hr />
                  <div className="column">
                    <p className="h5 text-dark">Azure </p>
                  </div>
                </div>
                <Button variant="dark" onClick={() => setShowFile1Modal(true)}>
                  Details
                </Button>
                <FileSorterModal1
                  show={showFile1Modal}
                  onHide={() => setShowFile1Modal(false)}
                />
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://www.credly.com/users/chinmayi-alshetty"
          id="show-all"
          className="btn rounded btn-show-all"
          rel="noreferrer"
          target="_blank"
        >
          View all
          <i className="fas fa-chevron-right" />
        </a>
      </Container>
    </section>
  );
}
