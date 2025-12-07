import Headings from "./Headings";
import SubHeading from "./SubHeading";
import SkillHolder from "./SkillHolder.jsx";
import { motion } from "framer-motion";

const skillData = [
  { toolTipName: "C++", link: "/skills/c.png", logoSize: "h-10 w-10" },
  { toolTipName: "CSS", link: "/skills/css-3.png", logoSize: "h-10 w-10" },
  {
    toolTipName: "DataStructures",
    link: "/skills/dataStructures.png",
    logoSize: "h-10 w-10",
  },
  { toolTipName: "Html-5", link: "/skills/html-5.png", logoSize: "h-10 w-10" },
  { toolTipName: "Java", link: "/skills/java.png", logoSize: "h-10 w-10" },
  {
    toolTipName: "JavaScript",
    link: "/skills/javaScript.png",
    logoSize: "h-10 w-10",
  },
  {
    toolTipName: "Algorithms",
    link: "/skills/algorithms.png",
    logoSize: "h-10 w-10",
  },
  { toolTipName: "React", link: "/skills/react.png", logoSize: "h-10 w-10" },
  { toolTipName: "Node.js", link: "/skills/node.png", logoSize: "h-10 w-10" },
  { toolTipName: "Python", link: "/skills/python.png", logoSize: "h-10 w-10" },
  { toolTipName: "Docker", link: "/skills/docker.png", logoSize: "h-10 w-10" },
  { toolTipName: "Spring Boot", link: "/skills/spring.webp", logoSize: "h-10 w-10" },
  { toolTipName: "Kafka", link: "/skills/kafka.png", logoSize: "h-10 w-10" },
  { toolTipName: "Redis", link: "/skills/redis.png", logoSize: "h-10 w-10" },
];

const dataBases = [
  { toolTipName: "Sql", link: "/skills/sql.png", logoSize: "h-10 w-14" },
  { toolTipName: "MongoDb", link: "/skills/mongo.png", logoSize: "h-12 w-14" },
];

const operatingSystems = [
  {
    toolTipName: "Windows",
    link: "/skills/windows.png",
    logoSize: "h-10 w-10",
  },
  { toolTipName: "Mac", link: "/skills/apple.png", logoSize: "h-13 w-13" },
];

const Skills = () => {
  return (
    <>
      <Headings>Skills</Headings>
      <SubHeading>CORE</SubHeading>
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }} 
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap gap-4">
          {skillData.map((skill, index) => (
            <SkillHolder
              key={index}
              link={skill.link}
              toolTipName={skill.toolTipName}
              logoSize={skill.logoSize}
            />
          ))}
        </div>
      </motion.div>
      <SubHeading>DATABASES</SubHeading>
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }} 
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap gap-4">
          {dataBases.map((skill, index) => (
            <SkillHolder
              key={index}
              link={skill.link}
              toolTipName={skill.toolTipName}
              logoSize={skill.logoSize}
            />
          ))}
        </div>
      </motion.div>
      <SubHeading>OPERATING SYSTEMS</SubHeading>
      <motion.div
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }} 
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap gap-4">
          {operatingSystems.map((skill, index) => (
            <SkillHolder
              key={index}
              link={skill.link}
              toolTipName={skill.toolTipName}
              logoSize={skill.logoSize}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
