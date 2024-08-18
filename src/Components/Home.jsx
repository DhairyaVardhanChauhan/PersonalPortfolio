import React from "react";
import { Typewriter } from 'react-simple-typewriter';
const Home = () => {
  return (
    <div className=" relative opacity-1 flex flex-col justify-center lg:items-start h-full lg:pl-52 z-10 min-[0px]:items-center">
      <h1 className="text-name md:text-[42px] lg:text-[56px] min-[0px]:text-[28px] font-bold leading-[56px] pb-4">
        Dhairya Vardhan Chauhan
      </h1>
      <div className="flex">
        <h1 id="homeTyper" className="font-popins text-name min-[0px]:text-[20px] lg:text-[26px] ">
          I'm a
        </h1>
        <h1 className="text-blue ml-2 min-[0px]:text-[20px] lg:text-[26px] ">
          <Typewriter
            words={["Software Developer", "Knight at LeetCode","Problem Solving Enthusiast(1500+ solved)","SDE Intern Zypp Electric"]}
            loop={false}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>
    </div>
  );
};

export default Home;
