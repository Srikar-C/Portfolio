import "./nav.css";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Nav() {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);
  return (
    <nav className="nav-bar" id="">
      <nav className="nav-top">
        <nav className="nav-left">
          <a href="">
            <h2>Challa Srikar</h2>
          </a>
        </nav>
        <nav className="nav-right">
          <a href="#home">
            <h2>Home</h2>
          </a>
          <a href="#home">
            <h2>About</h2>
          </a>
          <a href="#skill">
            <h2>Skills</h2>
          </a>
          <a href="#project">
            <h2>Projects</h2>
          </a>
          <a href="#contact">
            <h2>Contact</h2>
          </a>
        </nav>
      </nav>
      <nav className="nav-btm" data-aos="fade-right">
        <h1 style={{ fontSize: "70px" }}>Hi! I am Challa Srikar</h1>
        <a href="#home">
          <h2 className="over-view">
            View Profile
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </h2>
        </a>
      </nav>
      <nav className="sub-btm">
        <a href="https://www.instagram.com/_c_srikar/">
          <BsInstagram className="insta" data-aos="fade-right"/>
        </a>
        <a href="https://www.linkedin.com/in/srikar-challa-5a22b9250/">
          <PiLinkedinLogoLight className="link" data-aos="fade-right"/>
        </a>
        <a href="https://github.com/Srikar-C">
          <VscGithubInverted className="git" data-aos="fade-right"/>
        </a>
      </nav>
    </nav>
  );
}