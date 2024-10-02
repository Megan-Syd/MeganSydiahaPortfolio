import React, { useEffect, useState } from "react";
import HeadshotImg from "/assets/casual-headshot.png";
import SectionContainer from "../components/SectionContainer";

const About: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>("");

  useEffect(() => {
    fetch("/assets/about-me.txt")
      .then((response) => response.text())
      .then((text) => setFileContent(text))
      .catch((error) => console.error("Error reading from file:", error));
  }, []);

  const renderParagraphs = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => (
      <p key={index}>
        {paragraph.split("\n").map((line, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    ));
  };

  return (
    <SectionContainer id="about-section" title="Hey, it's nice to meet you">
      <div className="row">
        <div className="col-md d-flex flex-column justify-content-between">
          <div className="section-box p-3">
            <div>{renderParagraphs(fileContent)}</div>
          </div>
        </div>
        <div className="col-md d-flex justify-content-center mt-3">
          <div className=" circular-image-container d-flex align-items-center justify-content-center">
            <img
              src={HeadshotImg}
              alt="Headshot"
              title="Headshot"
              className="circular-image"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
