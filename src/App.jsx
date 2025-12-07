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
      {
        label: "Expertise",
        value: "Backend Development",
      },
      {
        label: "Task",
        value:
          "Developing backend systems using Java, Spring Boot, Redis, and Kafka. Built microservices for authentication, real-time rider tracking, and high-throughput data processing.",
      },
      {
        label: "Achievement",
        value:
          "Optimized SQL queries reducing execution time from 10s to 1s. Built a data-processing service delivering 60% faster analytics and implemented Kafka-based real-time streaming that improved data integrity by detecting 15% anomalies.",
      },
    ],
  },
  {
    heading: "GURUGRAM | 2025-Present",
    imgSrc: "/education/Salescode_LOGO.webp",
    imgAlt: "SalesCode.ai – Testify Framework",
    details: [
      { label: "Expertise", value: "Java & Systems Development" },
      {
        label: "Task",
        value:
          "Worked on a custom testing framework using Java ClassLoaders with a child-first strategy to hot-swap test files at runtime.",
      },
      {
        label: "Achievement",
        value:
          "Enabled real-time test execution updates without restarts, improving developer speed. Strengthened architecture using extensible dynamic loading mechanisms.",
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
          <div className="hidden lg:block">
              <MusicPlayer />
            </div>
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
