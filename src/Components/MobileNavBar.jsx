import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <div className='fixed cursor-pointer z-50 flex right-5 top-5 min-[0px]:block lg:hidden'>
      <button className='bg-transparent p-0' onClick={handleClick}>
        <GiHamburgerMenu className='font-extrabold text-[40px] flex-shrink-0 text-black' />
      </button>
    </div>
  );
}

export default MobileNavBar;
