import React, { useState, useEffect } from "react";
import { BiGitBranch } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoCodeSlash } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { MdCastForEducation, MdOutlinePersonOutline } from "react-icons/md";
import { TbBriefcase } from "react-icons/tb";
import SideIcon from "./SideIcon";

const handleClickScroll = (elementId) => {
  const element = document.getElementById(`${elementId}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const SideBar = () => {
  const [active, setIsActive] = useState(0);

  const icons = [
    { text: "Home", icon: <HiOutlineHome />, elementId: "home" },
    { text: "About", icon: <MdOutlinePersonOutline />, elementId: "about" },
    { text: "Skills", icon: <IoCodeSlash />, elementId: "skills" },
    { text: "Education", icon: <MdCastForEducation />, elementId: "education" },
    {
      text: "Work Experience",
      icon: <TbBriefcase />,
      elementId: "work",
    },
    { text: "Projects", icon: <BiGitBranch />, elementId: "projects" },
    // {
    //   text: "Achievements",
    //   icon: <HiOutlineTrophy />,
    //   elementId: "achievements",
    // },
    { text: "Contact", icon: <LuMail />, elementId: "contact" },
  ];

  const handleIconClick = (index, elementId) => {
    setIsActive(index);
    handleClickScroll(elementId);
  };

  useEffect(() => {
    const sections = icons.map((icon) =>
      document.getElementById(icon.elementId)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex(
              (section) => section && section.id === entry.target.id
            );
            setIsActive(index);
          }
        });
      },
      {
        threshold: sections.map((section) =>
          section?.id === "achievements" ? 0.3 : 0.6
        ),
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [icons]);

  return (
    <div className="flex flex-col fixed top-0 left-0 h-full justify-center p-2 z-50 min-[0px]:hidden lg:flex">
      {icons.map((item, index) => (
        <SideIcon
          key={index}
          text={item.text}
          isActive={active === index}
          handleClick={() => handleIconClick(index, item.elementId)}
        >
          <div
            className={`${
              active === index ? "text-white" : "text-black"
            } font-extrabold text-[20px] flex-shrink-0 hover-white`}
          >
            {item.icon}
          </div>
        </SideIcon>
      ))}
    </div>
  );
};

export default SideBar;
