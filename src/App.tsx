// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Languages from "./components/Languages";
import Contact from "./components/Contact";

function App() {
  // const [count, setCount] = useState(0);

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
