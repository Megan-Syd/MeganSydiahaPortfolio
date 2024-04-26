import { useState } from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  const sections = [
    { id: "about-section", name: "About me" },
    { id: "projects-section", name: "Projects" },
    { id: "languages-section", name: "Technologies" },
    { id: "contact-section", name: "Contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector(".header")?.clientHeight || 0;
    if (section) {
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleLinkClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <Container className="header d-flex justify-content-between align-items-center sticky-top">
        <Navbar id="home-section" expand="md">
          <h4
            className="text-left accent-color-1 main-title"
            onClick={handleTitleClick}
            style={{ cursor: "pointer" }}
          >
            Megan Sydiaha | Web Developer
          </h4>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`align-items-end ${menuOpen ? "show" : ""}`}
          >
            <Nav className={menuOpen ? "flex-column" : ""}>
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
