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
import Loader from "./Components/Loader"; // Import your Loader component

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

const fetchData = async (setIsLoading) => {
  setIsLoading(true);
  try {
    const response = await fetch("http://localhost:5173");
    const data = await response.json();
    // Handle your data
    console.log(data); // or update your state with this data
  } catch (error) {
    // Handle the error
    console.error("Error fetching data:", error);
  } finally {
    setIsLoading(false);
  }
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData(setIsLoading);
  }, []);

  return (
    <div className="overflow-hidden">
      {isLoading ? (
        <Loader /> // Show loader while data is being fetched
      ) : (
        <>
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
              <Hobbies />
            </section>
            <section
              id="contact"
              className="min-[0px]:pl-0 pt-[60px] xs:ml-10 lg:ml-0"
            >
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
