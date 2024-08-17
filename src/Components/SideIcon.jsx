import React from "react";

const SideIcon = ({ children, text,isActive, handleClick }) => {
  return (
    <li className="list-none">
      <a
        className={`box-border flex px-[18px] py-4 rounded-full ${isActive?"bg-blue":"bg-white"} items-center h-14 w-14 m-1.5 cursor-pointer hover:w-full transition-all duration-300 ease-in-out overflow-hidden expand`}
        onClick={handleClick}
      >
        <span>
            {children}
        </span>
        <span
          className="text-white ml-1 text-sm box-border whitespace-nowrap overflow-visible flex-shrink-0 py-0 px-[5px] pl-[7px] hidden"
        >
          {text}
        </span>
      </a>
    </li>
  );
};

export default SideIcon;
