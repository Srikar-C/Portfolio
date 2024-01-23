import { RiGraduationCapFill } from "react-icons/ri";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses
} from "@mui/lab/TimelineOppositeContent";
import "./edu.css";
import { MdWorkHistory } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function Education() {
  useEffect(()=>{
    AOS.init({duration:1000});
  },[]);

  const style = {
    '@media screen and (min-width:320px) and (max-width:480px)':{
      fontSize: '15px',
    }
  }

  return (
    <div className="over" id="about">
      <div className="education"  data-aos="fade-right">
        <div style={{ display: "flex", marginTop: "40px" }}>
          <RiGraduationCapFill className="logos" />
          <h2>Education</h2>
        </div>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2
            }
          }}
          className="timeline"
        >
          <TimelineItem>
            <TimelineOppositeContent
              color="white"
              className="left-list"
              style={style}
            >
              2020 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ marginTop: "-20px" }} className="right-list">
              <h3>B. Tech</h3>
              <p>G Pulla Reddy Engineering College</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              color="white"
              className="left-list"
              style={style}
            >
              2018 - 2020
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ marginTop: "-20px" }} className="right-list">
              <h3>Intermediate</h3>
              <p>Sri Chaitanya Junior College</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              color="white"
              className="left-list"
              style={style}
            >
              2017 - 2018
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ marginTop: "-20px" }} className="right-list">
              <h3>10th</h3>
              <p>Cattamanchi Ramalinga Reddy High School</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>

      <div className="experience"  data-aos="fade-left">
        <div style={{ display: "flex", marginTop: "40px" }}>
          <MdWorkHistory style={{ color: "blue" }} className="logos" />
          <h2>Experience</h2>
        </div>
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2
            }
          }}
          className="timeline"
        >
          <TimelineItem>
            <TimelineOppositeContent
              color="white"
              className="left-list"
              style={style}
              
            >
              Apr 2023 - Jun 2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ marginTop: "-20px" }} className="right-list">
              <h3>FrontEnd Web Developer</h3>
              <p>BOLT IOT</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              color="white"
              className="left-list"
              style={style}
            >
              Dec 2023 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ marginTop: "-20px" }} className="right-list">
              <h3>Intern</h3>
              <p>Crimson Innovative Technologies</p>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
}