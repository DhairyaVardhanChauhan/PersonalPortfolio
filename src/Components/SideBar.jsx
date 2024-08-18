import React, { useState } from 'react';
import { BiGitBranch } from "react-icons/bi";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import { IoCodeSlash } from "react-icons/io5";
import { LuMail } from "react-icons/lu";
import { MdCastForEducation, MdOutlinePersonOutline } from "react-icons/md";
import { TbBriefcase } from "react-icons/tb";
import SideIcon from './SideIcon';
        
const SideBar = () => {
  const [active, setIsActive] = useState(0);

  return (
    <div className='flex flex-col fixed top-0 left-0 h-full justify-center p-2 z-50 min-[0px]:hidden lg:flex'>
      <SideIcon text="Home" isActive={active === 0} handleClick={() => setIsActive(0)}>
        <HiOutlineHome className={`${active===0?"text-white":"text-black"} font-extrabold text-[20px] flex-shrink-0 hover-white`}/>
      </SideIcon>
      <SideIcon text="About" isActive={active === 1} handleClick={() => setIsActive(1)}>
        <MdOutlinePersonOutline className={`${active===1?"text-white":"text-black"} font-extrabold text-[20px] flex-shrink-0 hover-white`} />
      </SideIcon>
      <SideIcon text="Skills" isActive={active === 2} handleClick={() => setIsActive(2)}>
        <IoCodeSlash className={`${active===2?"text-white":"text-black"} font-extrabold text-[20px] flex-shrink-0 hover-white`} />
      </SideIcon>
      <SideIcon text="Education" isActive={active === 3} handleClick={() => setIsActive(3)}>
        <MdCastForEducation className={`${active===3?"text-white":"text-black"} font-extrabold text-[20px] flex-shrink-0 hover-white`} />
      </SideIcon>
      <SideIcon text="Work Experience" isActive={active === 4} handleClick={() => setIsActive(4)}>
        <TbBriefcase className={`${active===4?"text-white":"text-black"} font-extrabold text-[20px] flex-shrink-0 hover-white`} />
      </SideIcon>
      <SideIcon text="Projects" isActive={active === 5} handleClick={() => setIsActive(5)}>
        <BiGitBranch className={`${active===5?"text-white":"text-black"} font-extrabold text-[20px] flex-shrink-0 hover-white`} />
      </SideIcon>
      <SideIcon text="Achievements" isActive={active === 6} handleClick={() => setIsActive(6)}>
        <HiOutlineTrophy className={`${active===6?"text-white":"text-black"} font-extrabold text-[20px] flex-shrink-0 hover-white`} />
      </SideIcon>
      <SideIcon text="Contact" isActive={active === 7} handleClick={() => setIsActive(7)}>
        <LuMail className={`${active===7?"text-white":"text-black"} font-extrabold text-[20px] flex-shrink-0 hover-white`} />
      </SideIcon>
    </div>
  );
}

export default SideBar;
