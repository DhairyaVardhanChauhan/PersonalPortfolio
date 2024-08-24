import Headings from "./Headings";
import SubHeading from "./SubHeading";
import SkillHolder from "./SkillHolder.jsx";

const skillData = [
  { toolTipName: "C++", link: "/skills/c.png" },
  { toolTipName: "CSS", link: "/skills/css-3.png" },
  { toolTipName: "DataStructures", link: "/skills/dataStructures.png" },
  { toolTipName: "Html-5", link: "/skills/html-5.png" },
  { toolTipName: "Java", link: "/skills/java.png" },
  { toolTipName: "JavaScript", link: "/skills/javaScript.png" },
  { toolTipName: "Algorithms", link: "/skills/algorithms.png" },
  { toolTipName: "React", link: "/skills/react.png" },
  { toolTipName: "Node.js", link: "/skills/node.png" },
];

const Skills = () => {
  return (
    <>
      <Headings>Skills</Headings>
      <div>
        <SubHeading>CORE</SubHeading>
        <div className="flex flex-wrap gap-4">
          {skillData.map((skill, index) => (
            <SkillHolder
              key={index}
              link={skill.link}
              toolTipName={skill.toolTipName}
            />
          ))}
        </div>
        <SubHeading>DATABASES</SubHeading>
      </div>
    </>
  );
};

export default Skills;
