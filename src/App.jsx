import React from "react";
import "./App.css";
import About from "./Components/About.jsx";
import Achievements from "./Components/Achievements.jsx";
import Contact from "./Components/Contact.jsx";
import Education from "./Components/Education.jsx";
import Home from "./Components/Home";
import MobileNavBar from "./Components/MobileNavBar";
import Projects from "./Components/Projects.jsx";
import SideBar from "./Components/SideBar";
import Skills from "./Components/Skills.jsx";
import Work from "./Components/Work.jsx";

const educationData = [
  {
    heading: "GURUGRAM | 2014-2021",
    imgSrc: "/education/mris.png",
    imgAlt: "Manav Rachna International School",
    details: [
      { label: "Branch", value: "Science" },
      { label: "Percentage", value: "88.2% (Class 10)" },
      { label: "Percentage", value: "83.6% (Class 12)" },
    ],
  },
  {
    heading: "GREATER NOIDA | 2021-2025",
    imgSrc: "/education/bennett.png",
    imgAlt: "Bennett University",
    details: [
      { label: "Branch", value: "Computer Science" },
      { label: "Cgpa", value: "9.4/10" },
    ],
  },
];

const workData = [
  {
    heading: "GURUGRAM | 2024-Present",
    imgSrc: "/education/zypp_logo.png",
    imgAlt: "Zypp Electric",
    details: [
      { label: "Expertise", value: "BackEnd Developent" },
      {
        label: "Task",
        value:
          "Working as a backend developer in Java, using industry-relevant technology such as Spring and Spring Boot.",
      },
      {
        label: "Achievement",
        value:
          "Performed Query optimization reducing the time of execution from 10s to 1s",
      },
    ],
  },
  {
    heading: "ANOTHER CITY | 2023-2024",
    imgSrc: "/education/another_company.png",
    imgAlt: "Another Company",
    details: [
      { label: "Expertise", value: "FrontEnd Development" },
      {
        label: "Task",
        value: "Working on frontend development using React and Tailwind CSS.",
      },
      {
        label: "Achievement",
        value: "Led the redesign of the company’s main web application.",
      },
    ],
  },
];


function App() {
  return (
    <div>
      <SideBar />
      <MobileNavBar />
      <section id="home" className="bgImage">
        <Home />
      </section>
      <section className="min-[0px]:pl-0 lg:pl-[150px]">
        <section id="about" className="min-[0px]:pl-0 pt-[60px]">
          <About />
        </section>
        <section
          id="skills"
          className="min-[0px]:pl-0 pt-[60px] xs:ml-10 lg:ml-0"
        >
          <Skills />
        </section>
        <section
          id="education"
          className="min-[0px]:pl-0 pt-[60px] xs:ml-10 lg:ml-0"
        >
          <Education data={educationData} />
        </section>
        <section
          id="work"
          className="min-[0px]:pl-0 pt-[60px] xs:ml-10 lg:ml-0"
        >
          <Work data={workData} />
        </section>
        <section
          id="projects"
          className="min-[0px]:pl-0 pt-[60px] xs:ml-10 lg:ml-0"
        >
          <Projects />
        </section>
        <section
          id="achievements"
          className="min-[0px]:pl-0 pt-[60px] xs:ml-10 lg:ml-0"
        >
          <Achievements />
        </section>
        <section
          id="contact"
          className="min-[0px]:pl-0 pt-[60px] xs:ml-10 lg:ml-0"
        >
          <Contact/>
        </section>
      </section>
    </div>
  );
}

export default App;
