import React, { useState } from "react";
import { BiGitBranch } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoCodeSlash } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { MdCastForEducation, MdOutlinePersonOutline } from "react-icons/md";
import { TbBriefcase } from "react-icons/tb";

const MobileNavItems = ({ isOpen }) => {
  const [active, setActive] = useState(0);

  const navItems = [
    { id: 0, text: "Home", icon: <HiOutlineHome className="hover-white"/> },
    { id: 1, text: "About", icon: <MdOutlinePersonOutline className="hover-white"/> },
    { id: 2, text: "Skills", icon: <IoCodeSlash className="hover-white"/> },
    { id: 3, text: "Education", icon: <MdCastForEducation className="hover-white"/> },
    { id: 4, text: "Work Experience", icon: <TbBriefcase className="hover-white"/> },
    { id: 5, text: "Projects", icon: <BiGitBranch className="hover-white"/> },
    { id: 6, text: "Achievements", icon: <HiOutlineTrophy className="hover-white"/> },
    { id: 7, text: "Contact", icon: <LuMail className="hover-white"/> },
  ];

  return (
    <div
      className={`z-40 fixed top-0 ${!isOpen ? "-left-full" : "left-0"} flex flex-col items-start w-[350px] h-full transition-all duration-300 ease-in-out justify-center p-4`}
      style={{ backgroundColor: "white" }}
    >
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`flex items-center w-full p-4 mb-2 rounded-full cursor-pointer transition-colors duration-300 ease-in-out expand ${
            active === item.id ? "bg-blue text-white" : "bg-gray-100"
          } hover:bg-blue hover:text-white`}
          onClick={() => setActive(item.id)}
        >
          <div className={`text-2xl mr-4 ${active === item.id ? "text-white" : "text-black"} transition-colors duration-300 `}>
            {item.icon}
          </div>
          <div className={`text-sm`}>
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileNavItems;
