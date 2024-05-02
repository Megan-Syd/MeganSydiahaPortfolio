import { useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

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
    setMenuOpen(false);
  };

  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <Container className="header container-fluid my-3 d-flex justify-content-between">
        <h4
          className="text-left accent-color-1 main-title"
          onClick={handleTitleClick}
          style={{ cursor: "pointer" }}
        >
          Megan Sydiaha | Web Developer
        </h4>
        {/* <Navbar.Brand href="#" onClick={handleTitleClick}>
            Megan Sydiaha | Web Developer
           </Navbar.Brand> */}{" "}
        {/* Other option for page title */}
        <Navbar
          id="home-section"
          expand="md"
          className="ml-auto justify-content-end"
          expanded={menuOpen}
        >
          {/* <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ color: "#6b8093" }}
            onClick={toggleMenu}
          /> */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{
              color: menuOpen ? "#da879c" : "#6b8093",
              cursor: "pointer",
            }}
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
          </Navbar.Toggle>

          <Navbar.Collapse
            id="basic-navbar-nav"
            // className={menuOpen ? "show" : ""}
          >
            <Nav className={`align-items-end ${menuOpen ? "flex-column" : ""}`}>
              {sections.map((section, index) => (
                <a
                  className="px-3"
                  key={index}
                  onClick={() => handleLinkClick(section.id)}
                >
                  {section.name}
                </a>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
