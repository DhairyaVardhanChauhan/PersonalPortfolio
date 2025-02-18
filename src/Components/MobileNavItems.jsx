import React, { useState, useEffect } from "react";
import { BiGitBranch } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoCodeSlash } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { MdCastForEducation, MdOutlinePersonOutline } from "react-icons/md";
import { TbBriefcase } from "react-icons/tb";

const handleClickScroll = (elementId) => {
  const element = document.getElementById(`${elementId}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const MobileNavItems = ({ isOpen }) => {
  const [active, setActive] = useState(0);

  const navItems = [
    {
      id: 0,
      text: "Home",
      icon: <HiOutlineHome className="hover-white" />,
      elementId: "home",
    },
    {
      id: 1,
      text: "About",
      icon: <MdOutlinePersonOutline className="hover-white" />,
      elementId: "about",
    },
    {
      id: 2,
      text: "Skills",
      icon: <IoCodeSlash className="hover-white" />,
      elementId: "skills",
    },
    {
      id: 3,
      text: "Education",
      icon: <MdCastForEducation className="hover-white" />,
      elementId: "education",
    },
    {
      id: 4,
      text: "Work Experience",
      icon: <TbBriefcase className="hover-white" />,
      elementId: "work",
    },
    {
      id: 5,
      text: "Projects",
      icon: <BiGitBranch className="hover-white" />,
      elementId: "projects",
    },
    // {
    //   id: 6,
    //   text: "Achievements",
    //   icon: <HiOutlineTrophy className="hover-white" />,
    //   elementId: "achievements",
    // },
    {
      id: 7,
      text: "Contact",
      icon: <LuMail className="hover-white" />,
      elementId: "contact",
    },
  ];

  const handleItemClick = (id, elementId) => {
    setActive(id);
    handleClickScroll(elementId);
  };

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.elementId)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = navItems.findIndex(
              (item) => item.elementId === entry.target.id
            );
            setActive(index);
          }
        });
      },
      { threshold: 0.6 } // Adjust the threshold as needed
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navItems]);

  return (
    <div
      className={`z-40 fixed top-0 ${
        !isOpen ? "-left-full" : "left-0"
      } flex flex-col items-start w-[350px] h-full transition-all duration-300 ease-in-out justify-center p-4`}
      style={{ backgroundColor: "white" }}
    >
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`flex items-center w-full p-4 mb-2 rounded-full cursor-pointer transition-colors duration-300 ease-in-out expand ${
            active === item.id ? "bg-blue text-white" : "bg-gray-100"
          } hover:bg-blue hover:text-white`}
          onClick={() => handleItemClick(item.id, item.elementId)}
        >
          <div
            className={`text-2xl mr-4 ${
              active === item.id ? "text-white" : "text-black"
            } transition-colors duration-300 `}
          >
            {item.icon}
          </div>
          <div className={`text-sm`}>{item.text}</div>
        </div>
      ))}
    </div>
  );
};

export default MobileNavItems;
