import "./about.css";
import resume from "./Resume.pdf";
import Education from "./Education";
export default function About() {
  return (
    <div className="about" id="home">
      <div className="intro">
        <h1> About Me</h1>
        <div className="intro2">
          <h3>
            As a CSE undergraduate, I possess a strong foundation in programming
            and software development. I am looking forward to apply my skills
            and knowledge in a dynamic and challenging work environment.
          </h3>
          <nav className="abt-btm">
            <a href={resume} download>
              <h2 className="over-view">
                Download CV
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </h2>
            </a>
          </nav>
        </div>
      </div>
      <Education />
    </div>
  );
}