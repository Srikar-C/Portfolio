import "./skill.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Skills() {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);
  return (
    <div className="skills" id="skill">
      <h1 className="main-head">Skills</h1>
      <div className="under" data-aos="fade-right">
        <div className="program">
          <h1>Programming</h1>
          <hr />
          <div className="program-list">
            <li>
              <img src="https://nerdysoft.com/wp-content/uploads/2021/11/java-14-1.svg" />
              <p>Java</p>
            </li>
          </div>
        </div>
      </div>
      <div className="under" data-aos="fade-right">
        <div className="front">
          <h1>Frontend Technologies</h1>
          <hr />
          <div className="front-list">
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" />
              <p>HTML</p>
            </li>
            <li>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" />
              <p>CSS</p>
            </li>
            <li>
              <img src="https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png" />
              <p>Java Script</p>
            </li>
            <li>
              <img src="https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-512x455-jctj7y5w.png" />
              <p>React JS</p>
            </li>
            <li>
              <img src="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png" />
              <p>Material UI</p>
            </li>
          </div>
        </div>
      </div>
      <div className="under" data-aos="fade-right">
        <div className="data">
          <h1>Databases</h1>
          <hr />
          <div className="data-list">
            <li>
              <img src="https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-976x1024-eobwqz2q.png" />
              <p>SQL</p>
            </li>
          </div>
        </div>
      </div>
      <div className="under" data-aos="fade-right">
        <div className="version">
          <h1>Version Control</h1>
          <hr />
          <div className="version-list">
            <li>
              <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
              <p>Git</p>
            </li>
            <li>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
              <p>Github</p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}