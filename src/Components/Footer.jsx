import React from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-start items-center flex-col py-4 bg-gray-100 ">
      <h2 className="lg:text-4xl font-bold mb-4 text-center xs:text-2xl">
        Dhairya Vardhan Chauhan
      </h2>
      <p className="text-gray-600 text-lg mb-4">
        Software Developer | Full Stack Enthusiast
      </p>
      <div className="social-icons flex justify-center space-x-4 mt-4 mb-4">
        <a
          href="https://www.linkedin.com/in/dhairya-chauhan-696081226/"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <FaLinkedin className="text-blue-500 w-6 h-6 hover:text-blue-700" />
        </a>
        <a
          href="https://github.com/DhairyaVardhanChauhan"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <FaGithub className="text-gray-700 w-6 h-6 hover:text-black" />
        </a>
        <a
          href="https://leetcode.com/u/Dhairya_Vardhan_Chauhan/"
          target="_blank"
          rel="noreferrer"
          className="transition-transform duration-300 hover:scale-110"
        >
          <FaCode className="text-yellow-400 w-6 h-6 hover:text-yellow-500" />
        </a>
      </div>
      <hr className="w-full text-black" />
      <div className="flex items-center text-center text-gray-600 text-lg pt-4">
        &copy; {new Date().getFullYear()} Dhairya Vardhan Chauhan. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
