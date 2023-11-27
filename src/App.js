import "./App.css";
import Nav from "./Navigation/Nav";
import About from "./About/About";
import Project from "./Projects/Project";
import Contact from "./ContactMe/Contact";
import Skills from "./Skills/Skills";
export default function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}