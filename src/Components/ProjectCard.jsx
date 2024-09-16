import React from "react";
import "../projectCard.css";
import SkillHolder from "./SkillHolder";

export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const ProjectCard = ({ heading, cardContent, skills, link, cardImage }) => {
  const MAX_SKILLS_ALLOWED = 8;
  const truncatedSkills = skills.slice(0, MAX_SKILLS_ALLOWED);

  const maxLength = 195;
  const truncatedContent = truncateText(cardContent, maxLength);

  return (
    <article className="card xs:w-[300px] sm:w-[420px] mb-8 mr-8 hover:shadow-threeD transition-all delay-100 ease-in-out">
      <div
        className={`thumb ${cardImage} bg-no-repeat bg-center bg-cover`}
      ></div>
      <div className="infos">
        <h2 className="title text-center">{heading}</h2>
        <div className="skills-container flex flex-wrap h-14 overflow-hidden transition-all delay-300 ease-in-out justify-start xs:hidden md:flex">
          {truncatedSkills.map((skill, index) => (
            <SkillHolder
              key={index}
              link={skill.link}
              toolTipName={skill.toolTipName}
              logoSize={skill.logoSize}
              className="mt-2 h-[3rem] w-[3rem] pointer-events-none mr-3"
            />
          ))}
        </div>
        <p className="txt pt-2 font-popins">{truncatedContent}</p>
        <a href={`${link}`} target="_blank" className="text-blue">
          View Source
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
