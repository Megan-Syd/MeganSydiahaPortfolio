// import React from "react";
import ReactIcon from "/assets/language_icons/react.svg";
import CSharpIcon from "/assets/language_icons/c-sharp.svg";
import CssIcon from "/assets/language_icons/css-3.svg";
import DotNetIcon from "/assets/language_icons/dotnet.svg";
import HtmlIcon from "/assets/language_icons/html-5.svg";
import JavaIcon from "/assets/language_icons/java.svg";
import JSIcon from "/assets/language_icons/javascript.svg";
import MySqlIcon from "/assets/language_icons/mysql-icon.svg";
import PhpIcon from "/assets/language_icons/php.svg";
import PythonIcon from "/assets/language_icons/python.svg";
import SpringIcon from "/assets/language_icons/spring-icon.svg";
import TSIcon from "/assets/language_icons/typescript-icon.svg";
import LaravelIcon from "/assets/language_icons/laravel.svg";
import PostmanIcon from "/assets/language_icons/postman.svg";
import GithubIcon from "/assets/language_icons/github.svg";
import ChakraIcon from "/assets/language_icons/chakra.svg";
import BootstrapIcon from "/assets/language_icons/bootstrap.svg";
// import { useState } from "react";

const Languages = () => {
  const iconsData = [
    { icon: JavaIcon, name: "Java" },
    { icon: CSharpIcon, name: "C#" },
    { icon: PythonIcon, name: "Python" },
    { icon: PhpIcon, name: "PHP" },
    { icon: JSIcon, name: "JavaScript" },
    { icon: TSIcon, name: "TypeScript" },
    { icon: ReactIcon, name: "React" },
    { icon: DotNetIcon, name: ".NET" },
    { icon: SpringIcon, name: "Spring" },
    { icon: LaravelIcon, name: "Laravel" },
    { icon: PostmanIcon, name: "Postman" },
    { icon: MySqlIcon, name: "MySQL" },
    { icon: HtmlIcon, name: "HTML" },
    { icon: CssIcon, name: "CSS" },
    { icon: BootstrapIcon, name: "Bootstrap" },
    { icon: ChakraIcon, name: "Chakra" },
    { icon: GithubIcon, name: "GitHub" },
  ];

  // const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // const handleMouseEnter = (iconName: string) => {
  //   setHoveredIcon(iconName);
  // };

  // const handleMouseLeave = () => {
  //   setHoveredIcon(null);
  // };

  return (
    <>
      <div id="languages-section" className="container m-md-5 my-sm-5">
        <h2 className="accent-color-1 mb-4">Technologies</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-center p-4 section-box text-center">
          {iconsData.map(({ icon }, index) => (
            <div className="col" key={index}>
              {/* <div
                className="position-relative"
                onMouseEnter={() => handleMouseEnter(name)}
                onMouseLeave={handleMouseLeave}
              > */}
              <img
                className="m-5 zoom-on-hover"
                style={{ maxWidth: "80px", maxHeight: "80px" }}
                src={icon}
                alt={icon.split("/").pop()?.split(".")[0]}
                title={icon.split("/").pop()?.split(".")[0]}
              />
              {/* {hoveredIcon === name && (
                  <div className="position-absolute top-50 start-50 translate-middle badge bg-dark">
                    {name}
                  </div>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Languages;
