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
      <hr className="accent-color-1" />
      <Projects />
      <hr className="accent-color-1" />
      <Languages />
      <hr className="accent-color-1" />
      <Contact />
    </>
  );
}

export default App;
