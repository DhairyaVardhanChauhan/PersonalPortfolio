import React, { useEffect, useState } from "react";
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
import Footer from "./Components/Footer.jsx";
import Hobbies from "./Components/Hobbies.jsx";
import Loader from "./Components/Loader";
import MusicPlayer from "./Components/Music.jsx";

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
      { label: "Expertise", value: "BackEnd Development" },
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
    heading: "GURUGRAM | 2024-Present",
    imgSrc: "/education/zypp_logo.png",
    imgAlt: "Zypp Electric",
    details: [
      { label: "Expertise", value: "BackEnd Development" },
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
];

const fetchData = async (setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await fetch("http://localhost:5173");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    setIsLoading(false);
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData(setIsLoading);
  }, []);

  return (
    <div className="overflow-hidden">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SideBar />
          <MobileNavBar />
          <MusicPlayer></MusicPlayer>
          <section id="home" className="bgImage">
            <Home />
          </section>
          <section className="xs:pl-2 xs:pr-2 lg:pl-[150px]">
            <section id="about" className="xs:pl-2 xs:pr-2 pt-[60px]">
              <About />
            </section>
            <section id="skills" className="xs:pl-2 xs:pr-2 pt-[60px] ml-10">
              <Skills />
            </section>
            <section id="education" className="xs:pl-2 xs:pr-2 pt-[60px] ml-10">
              <Education data={educationData} />
            </section>
            <section id="work" className="xs:pl-2 xs:pr-2 pt-[60px] ml-10">
              <Work data={workData} />
            </section>
            <section id="projects" className="xs:pl-2 xs:pr-2 pt-[60px] ml-10">
              <Projects />
            </section>
            <section
              id="achievements"
              className="xs:pl-2 xs:pr-2 pt-[60px] ml-10"
            >
              {/* <Achievements /> */}
              <Hobbies />
            </section>
            <section id="contact" className="xs:pl-2 xs:pr-2 pt-[60px] ml-10">
              <Contact />
            </section>
          </section>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
