import React, { useEffect, useState } from "react";
import HeadshotImg from "../assets/casual-headshot.png";

const About: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>("");

  useEffect(() => {
    fetch("src/assets/about-me.txt")
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
    <>
      <div id="about-section" className="container m-5">
        <div className="row">
          <div className="col m-5">
            <h2 className="accent-color-1 mb-4">Hey, it's nice to meet you</h2>
            <div className="section-box p-3">
              <p>{renderParagraphs(fileContent)}</p>
            </div>
          </div>
          <div className="col">
            <div className=" circular-image-container">
              <img
                src={HeadshotImg}
                alt="Headshot"
                className="circular-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
