import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import MobileNavItems from "./MobileNavItems";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className={`fixed cursor-pointer z-50 flex right-5 top-5 min-[0px]:block lg:hidden`}>
      <button
        className={`relative z-50 p-0 transition-all duration-300 ${
          isOpen ? "bg-blue rounded-full" : "bg-transparent"
        }`}
        onClick={handleClick}
      >
        {!isOpen ? (
          <GiHamburgerMenu
            className="z-50 text-[36px] flex-shrink-0 text-black transition-opacity duration-300 opacity-100"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
        ) : (
          <IoCloseSharp
            className="z-50 font-extrabold text-[40px] p-2 box-border flex-shrink-0 text-white transition-opacity duration-300 opacity-100"
            style={{ opacity: isOpen ? 1 : 0 }}
          />
        )}
      </button>
      <MobileNavItems isOpen={isOpen}></MobileNavItems>
    </div>
  );
};

export default MobileNavBar;
