import "./cont.css";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";
export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h1>Contact me</h1>
      <div className="top">
        <a href="https://www.instagram.com/_c_srikar/">
          <BsInstagram className="insta" />
        </a>
        <a href="https://www.linkedin.com/in/srikar-challa-5a22b9250/">
          <PiLinkedinLogoLight className="link" />
        </a>
        <a href="https://github.com/Srikar-C">
          <VscGithubInverted className="git" />
        </a>
      </div>
      <div className="det">
        <p>csrikar2003@gmail.com</p>
        <p className="phone">+91 9030585689</p>
      </div>
    </div>
  );
}