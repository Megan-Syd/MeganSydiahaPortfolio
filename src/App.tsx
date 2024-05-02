import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Megan Sydiaha | Web Developer</title>
        <meta
          name="description"
          content="Professional portfolio of Megan Sydiaha's web development career."
        />
        <meta name="author" content="Megan Sydiaha" />
        <meta
          name="keywords"
          content="web developer, web design, software developer, front-end developer, full stack developer"
        />
        <meta property="og:title" content="Megan Sydiaha | Web Developer" />
        <meta
          property="og:description"
          content="Professional portfolio of Megan Sydiaha's web development career."
        />
        <meta
          property="og:url"
          content="https://megansydiahaportfolio.vercel.app/"
        />
      </Helmet>
      <Header />
      <About />
      <hr className="accent-color-1 mx-4" />
      <Projects />
      <hr className="accent-color-1 mx-4" />
      <Languages />
      <hr className="accent-color-1 mx-4" />
      <Contact />
    </>
  );
}

export default App;
