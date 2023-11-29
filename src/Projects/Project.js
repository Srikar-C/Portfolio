import health from "./health.png";
import calc from "./calc.png";
import otp from "./otp.png";
import todo from "./todo.png";
import port from "./port.png";
import "./pro.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
// import MCard from "./MCard";
export default function Project() {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);
  function Card(props) {
    return (
      <div className="project-list" data-aos="fade-right">
        <img src={props.src} />
        <h3>{props.name}</h3>
        <p>{props.content}</p>
        {/* <div className="links"> */}
        <a href={props.git} className="nextPage" download>
          <h2 className="Goto">
            View on Github
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </h2>
        </a>
        <a href={props.link} className="nextPage" download>
          <h2 className="Goto">
            View Demo
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </h2>
        </a>
        {/* </div> */}
        {/* <a href={props.link} className="nextPage">
          View Details
        </a> */}
      </div>
    );
  }
  return (
    <div className="proj" id="project">
      <h1>Projects</h1>
      <div id="projects">
        <Card
          name="Health Connect"
          src={health}
          content="Application where one can have there individual credentials and store there data securely and find avaliable doctors ad book there slots."
          git="https://github.com/Srikar-C/HealthConnect"
          link="https://ibm-hack456.web.app/"
        />
        <Card
          name="PortFolio"
          src={port}
          content="Portfolio"
          git="https://github.com/Srikar-C/PortFolio"
          link="https://k3z92h.csb.app/"
        />
        <Card
          name="To Do List"
          src={todo}
          content="Application where one can add and remove their items at any time"
          git="https://github.com/Srikar-C/TODOList"
          link="https://y5st66.csb.app/"
        />

        <Card
          name="Invetrom Website"
          src="data:image/png;base64,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"
          content="Frontend Application of Inventrom Website"
          git="https://github.com/Srikar-C/Inventrom"
          link="https://prps65.csb.app/"
        />
        <Card
          name="One Time Password Generator"
          src={otp}
          content="Application where one can generate random password and get temporary mail"
          git="https://github.com/Srikar-C/One-Time-Password-Generator"
          link="https://fjcy9j.csb.app/"
        />
        <Card
          name="Calculator"
          src={calc}
          content="Small application where one can do simple mathematical calculations"
          git="https://github.com/Srikar-C/calci"
          link="https://srikar-c.github.io/calci/"
        />
      </div>
    </div>
  );
}