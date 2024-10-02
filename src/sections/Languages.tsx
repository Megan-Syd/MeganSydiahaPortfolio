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
import StyledComponentsIcon from "/assets/language_icons/styled-components.svg";
import MaterialUIIcon from "/assets/language_icons/materialui.svg";
import NextJSIcon from "/assets/language_icons/next-js.svg";
import StorybookIcon from "/assets/language_icons/storybook.svg";
import { useState } from "react";
import SectionContainer from "../components/SectionContainer";

const Languages: React.FC = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const iconsData = [
    { icon: JavaIcon, name: "Java" },
    { icon: CSharpIcon, name: "C#" },
    { icon: PythonIcon, name: "Python" },
    { icon: PhpIcon, name: "PHP" },
    { icon: JSIcon, name: "JavaScript" },
    { icon: TSIcon, name: "TypeScript" },
    { icon: ReactIcon, name: "React" },
    { icon: NextJSIcon, name: "Next.js" },
    { icon: DotNetIcon, name: ".NET" },
    { icon: SpringIcon, name: "Spring" },
    { icon: LaravelIcon, name: "Laravel" },
    { icon: PostmanIcon, name: "Postman" },
    { icon: MySqlIcon, name: "MySQL" },
    { icon: HtmlIcon, name: "HTML" },
    { icon: CssIcon, name: "CSS" },
    { icon: BootstrapIcon, name: "Bootstrap" },
    { icon: ChakraIcon, name: "Chakra" },
    { icon: StyledComponentsIcon, name: "Styled Components" },
    { icon: MaterialUIIcon, name: "Material UI" },
    { icon: StorybookIcon, name: "Storybook" },
    { icon: GithubIcon, name: "GitHub" },
  ];

  return (
    <SectionContainer id="languages-section" title="Technologies">
      <div
        className="d-flex 
      flex-wrap 
      justify-content-center 
      align-items-center 
      p-4 
      section-box 
      text-center"
      >
        {iconsData.map(({ icon, name }, index) => (
          <div
            className="custom-icon zoom-on-hover position-relative"
            key={index}
            onMouseEnter={() => setHoveredIcon(name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              className="m-5"
              style={{ maxWidth: "80px", maxHeight: "80px" }}
              src={icon}
              alt={name}
              title={name}
            />
            {hoveredIcon === name && (
              <span
                className="icon-name 
              bg-white 
              bg-opacity-75 
              p-2 rounded 
              position-absolute 
              start-50 
              translate-middle"
              >
                {name}
              </span>
            )}
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Languages;
