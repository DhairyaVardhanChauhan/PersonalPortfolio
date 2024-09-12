import Headings from "./Headings";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    heading: "Sorting Visualizer",
    cardContent:
      "Explore the fascinating world of sorting algorithms with this interactive Sorting Visualizer. Whether you're learning about Bubble Sort, Quick Sort, or Merge Sort.",
    cardImage: "bg-[url('/projectImages/sorting.gif')]",
    skills: [
      {
        link: "/skills/javaScript.png",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/react.png",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/node.png",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/html-5.png",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/css-3.png",
        logoSize: "h-8 w-8",
      },
    ],
    link: "https://sortingiseasy.netlify.app/",
  },
  {
    heading: "Dsa Sheet Maker",
    cardImage: "bg-[url('/projectImages/dsa.gif')]",
    cardContent:
      "Dsa Sheet Maker is a comprehensive tool designed to help students and professionals create detailed Data Structures and Algorithms (DSA) cheat sheets.",
    skills: [
      {
        link: "/skills/react.png",
        toolTipName: "React",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/javaScript.png",
        toolTipName: "JavaScript",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/node.png",
        toolTipName: "Node.js",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/css-3.png",
        toolTipName: "CSS",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/html-5.png",
        toolTipName: "HTML",
        logoSize: "h-8 w-8",
      },
    ],
    link: "https://create-my-sheet.netlify.app/",
  },
  {
    heading: "Palette Portal",
    cardImage: "bg-[url('/projectImages/palette.gif')]",
    cardContent:
      "Explore a curated collection of contemporary and classic art in our virtual gallery. View, learn, and purchase pieces from talented artists worldwide, all from the comfort of home.",
    skills: [
      {
        link: "/skills/javaScript.png",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/react.png",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/node.png",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/html-5.png",
        logoSize: "h-8 w-8",
      },
      {
        link: "/skills/css-3.png",
        logoSize: "h-8 w-8",
      },
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
          <ProjectCard
            key={index}
            heading={project.heading}
            cardContent={project.cardContent}
            skills={project.skills}
            link={project.link}
            cardImage={project.cardImage}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;
