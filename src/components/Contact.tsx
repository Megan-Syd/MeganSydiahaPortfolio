// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

import ViewPDF from "./ViewPDF";

const Contact = () => {
  return (
    <>
      <div
        id="contact-section"
        className="container m-5 d-flex flex-column align-items-stretch"
      >
        <div className="row m-5">
          <div className="col-5">
            <h2 className="accent-color-1 my-5">Let's work together</h2>
          </div>
          <div className="col">
            <h5 className="accent-color-1">Drop me a line</h5>
            <a
              className="link-dark link-underline link-underline-opacity-0"
              href="mailto:sydiaha.megan@gmail.com"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="pe-2 accent-color-2 icon"
              />
              <span>sydiaha.megan@gmail.com</span>
            </a>

            <p>
              <FontAwesomeIcon
                icon={faMobile}
                className="pe-2 accent-color-2 icon"
              />
              306-260-2727
            </p>
            <h5 className="accent-color-1 mt-4">Follow me here</h5>
            <a
              href="https://www.linkedin.com/in/megansydiaha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon me-2" />
            </a>
            <a
              href="https://github.com/Megan-Syd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faSquareGithub} className="icon" />
            </a>
            <ViewPDF />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
