// import React from "react";

// import { useRef } from "react";

const Header = () => {
  const sections = [
    { id: "about-section", name: "About me" },
    { id: "projects-section", name: "Projects" },
    { id: "languages-section", name: "Technologies" },
    { id: "contact-section", name: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector(".header")?.clientHeight || 0;
    if (section) {
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        id="home-section"
        className="d-flex justify-content-between align-items-center header"
      >
        <h4
          className="text-left accent-color-1 main-title"
          onClick={handleTitleClick}
          style={{ cursor: "pointer" }}
        >
          Megan Sydiaha | Web Developer
        </h4>
        <nav>
          <div className="d-flex justify-content-end">
            {sections.map((section, index) => (
              <a
                href={`#${section.id}`}
                className="px-3"
                key={index}
                onClick={() => handleLinkClick(section.id)}
              >
                {section.name}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
