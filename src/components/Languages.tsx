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

const Languages = () => {
  const icons = [
    JavaIcon,
    CSharpIcon,
    PythonIcon,
    PhpIcon,
    JSIcon,
    TSIcon,
    HtmlIcon,
    CssIcon,
    ReactIcon,
    DotNetIcon,
    SpringIcon,
    MySqlIcon,
    LaravelIcon,
    PostmanIcon,
    GithubIcon,
    ChakraIcon,
  ];

  return (
    <>
      <div id="languages-section" className="container m-5">
        <h2 className="accent-color-1 m-5">Languages and frameworks</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 m-5 p-4 section-box text-center">
          {icons.map((icon, index) => (
            <div className="col" key={index}>
              <img
                className="m-4 zoom-on-hover"
                style={{ maxWidth: "80px", maxHeight: "80px" }}
                src={icon}
                alt={"Icon ${index}"}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Languages;
