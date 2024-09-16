import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Profiles from "./Profiles";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="relative opacity-1 flex flex-col justify-center lg:items-start h-full lg:pl-52 z-10 min-[0px]:items-center"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1
        className="text-name md:text-[42px] lg:text-[56px] min-[0px]:text-[28px] font-bold leading-[56px] pb-4"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Dhairya Vardhan Chauhan
      </motion.h1>

      <motion.div
        className="flex"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1
          id="homeTyper"
          className="font-popins text-name min-[0px]:text-[16px] md:text-[20px] lg:text-[26px]"
        >
          I'm a
        </h1>
        <h1 className="text-blue ml-2 min-[0px]:text-[16px] md:text-[20px] lg:text-[26px]">
          <Typewriter
            words={[
              "Software Developer",
              "♞ Knight at LeetCode",
              "Problem Solving Enthusiast (1500+ solved)",
              "SDE Intern Zypp Electric",
            ]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Profiles />
      </motion.div>
    </motion.div>
  );
};

export default Home;
