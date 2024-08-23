import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const Profiles = () => {
  const links = [
    "https://www.linkedin.com/in/dhairya-chauhan-696081226/",
    "https://github.com/DhairyaVardhanChauhan",
    "https://leetcode.com/u/Dhairya_Vardhan_Chauhan/",
    "https://www.youtube.com/@dhairyachauhan6622"
  ];

  return (
    <div className='bg-transparent relative z-30 flex pr-2 justify-center items-center mt-8 space-x-8'> 
      <a href={links[0]} target='_blank' className="flex-shrink-0">
        <GrLinkedin className={`text-[#45505b] font-extrabold text-[18px] cursor-pointer hover:text-blue transition-colors ease-in-out duration-300`}></GrLinkedin>
      </a>
      <a href={links[1]} target='_blank' className="flex-shrink-0">
        <FaGithub className={`text-[#45505b] font-extrabold text-[20px] cursor-pointer hover:text-black transition-colors ease-in-out duration-300`}></FaGithub>
      </a>
      <a href={links[2]} target='_blank' className="flex-shrink-0">
        <SiLeetcode className={`text-[#45505b] font-extrabold text-[20px] cursor-pointer hover:text-yellow-600 transition-colors ease-in-out duration-300`}></SiLeetcode>
      </a>
      <a href={links[3]} target='_blank' className="flex-shrink-0">
        <FaYoutube className={`text-[#45505b] font-extrabold text-[24px] cursor-pointer hover:text-red-600 transition-colors ease-in-out duration-300`}></FaYoutube>
      </a>
    </div>
  );
}

export default Profiles;
