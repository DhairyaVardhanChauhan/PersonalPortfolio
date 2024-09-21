import Headings from "./Headings";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    heading: "Sorting Visualizer",
    cardContent:
      "Explore the fascinating world of sorting algorithms with this interactive Sorting Visualizer. Whether you're learning about Bubble Sort, Quick Sort, or Merge Sort.",
    cardImage: "bg-[url('/projectImages/sorting.gif')]",
    skills: [
      { link: "/skills/javaScript.png", logoSize: "h-8 w-8" },
      { link: "/skills/react.png", logoSize: "h-8 w-8" },
      { link: "/skills/node.png", logoSize: "h-8 w-8" },
      { link: "/skills/html-5.png", logoSize: "h-8 w-8" },
      { link: "/skills/css-3.png", logoSize: "h-8 w-8" },
    ],
    link: "https://sortingiseasy.netlify.app/",
  },
  {
    heading: "Dsa Sheet Maker",
    cardImage: "bg-[url('/projectImages/dsa.gif')]",
    cardContent:
      "Dsa Sheet Maker is a comprehensive tool designed to help students and professionals create detailed Data Structures and Algorithms (DSA) cheat sheets.",
    skills: [
      { link: "/skills/react.png", logoSize: "h-8 w-8" },
      { link: "/skills/javaScript.png", logoSize: "h-8 w-8" },
      { link: "/skills/node.png", logoSize: "h-8 w-8" },
      { link: "/skills/css-3.png", logoSize: "h-8 w-8" },
      { link: "/skills/html-5.png", logoSize: "h-8 w-8" },
    ],
    link: "https://create-my-sheet.netlify.app/",
  },
  {
    heading: "Palette Portal",
    cardImage: "bg-[url('/projectImages/palette2.gif')]",
    cardContent:
      "Explore a curated collection of contemporary and classic art in our virtual gallery. View, learn, and purchase pieces from talented artists worldwide, all from the comfort of home.",
    skills: [
      { link: "/skills/javaScript.png", logoSize: "h-8 w-8" },
      { link: "/skills/react.png", logoSize: "h-8 w-8" },
      { link: "/skills/node.png", logoSize: "h-8 w-8" },
      { link: "/skills/html-5.png", logoSize: "h-8 w-8" },
      { link: "/skills/css-3.png", logoSize: "h-8 w-8" },
    ],
    link: "http://paletteportal.rf.gd/frontend/register.php?i=2",
  },
];

const Projects = () => {
  return (
    <div>
      <Headings>Projects</Headings>
      <div className="mt-[60px] relative flex flex-wrap justify-evenly">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: -50, rotate: 5 }} // Start slightly above and rotated
            whileInView={{
              y: [0, 10, -10, 0], // Smooth drop and shake effect
              rotate: [5, 0, -5, 0], // Smooth shake
              transition: {
                duration: 0.75, // Increase duration for smoother transitions
                times: [0, 0.3, 0.7, 1], // More spaced-out keyframes
                ease: "easeInOut", // Smooth easing
                repeat: 1, // Repeat the animation once (total of 2 runs)
                repeatType: "mirror", // Mirror the animation for seamless looping
              },
            }}
            viewport={{ once: true }} // Animation happens once
          >
            <ProjectCard
              heading={project.heading}
              cardContent={project.cardContent}
              skills={project.skills}
              link={project.link}
              cardImage={project.cardImage}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
