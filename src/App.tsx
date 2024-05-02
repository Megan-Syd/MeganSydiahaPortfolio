import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
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
