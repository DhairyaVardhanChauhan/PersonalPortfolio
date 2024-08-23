import React from "react";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { IoNewspaperSharp } from "react-icons/io5";
import { LuBraces, LuDownload } from "react-icons/lu";
import Headings from "./Headings";


const details = [
  {
    number: 1,
    text: "Internships"
  },
  {
    number:4,
    text:"Projects"
  },
  {
    number:6,
    text:"Research Work"
  },
  {
    number:14,
    text:"Activities & Awards"
  }
]


const About = () => {
  return (
    <div>
      <Headings>About</Headings>
      <div className="flex mt-[60px]">
        <div className="w-1/3 border-black border-2 object-cover">
          <img
            src="dummy_img.png"
            alt="Profile"
            className="img-fluid rounded-lg"
          />
        </div>
        <div className="lg:pl-8 w-[62%] font-popins">
          <p className="text-justify">
            Hi there! My name is <strong>Dhairya Vardhan Chauhan</strong>, and
            I'm currently pursuing a <strong>Bachelor of Technology</strong> at
            Bennett University with a stellar CGPA of <strong>9.4/10</strong>. I
            am passionate about <strong>backend development</strong>, and I've
            honed my skills by working on various projects that involve
            designing and optimizing databases, writing efficient APIs, and
            developing full-stack web applications.
          </p>

          <p className="text-justify">
            I've recently dived deep into problem-solving on{" "}
            <strong>LeetCode</strong>, where I have solved over{" "}
            <strong>920+ problems</strong> and participated in more than{" "}
            <strong>50 contests</strong>, achieving a top{" "}
            <strong>5% ranking</strong> with a best rating of{" "}
            <strong>1855</strong>. My dedication to improving my algorithmic
            skills has earned me the title of <strong>Knight</strong> on
            LeetCode.
          </p>

          <p className="text-justify">
            In addition to my backend expertise, I've explored web development
            by building projects like a <strong>DSA Sheet Maker</strong> and a{" "}
            <strong>Sorting Visualizer</strong>, which have helped me better
            understand user interaction and experience. My projects range from
            practical tools to interactive applications, all designed to improve
            efficiency and user engagement.
          </p>

          <p className="text-justify">
            When I'm not coding, you'll likely find me exploring new
            technologies or contributing to the{" "}
            <strong>developer community</strong>. I'm excited to continue
            growing my skills and contributing to impactful projects in the
            future.
          </p>

          <p className="text-justify">
            Thank you for taking the time to learn more about me. I'm eager to
            see where my journey in software development takes me next!
          </p>

          <a
            href="/Dhairya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue hover:text-purple-800 transition-colors ease-in-out duration-300 mt-4"
          >
            <div className="flex items-center">
              <LuDownload></LuDownload>
              <p className="pl-2">View Resume</p>
            </div>
          </a>
        </div>
      </div>
      <div className="pt-[60px] flex justify-evenly">
        <div className="flex flex-col items-center">
          <div className="bg-blue text-white h-12 w-12 flex items-center justify-center rounded-full">
            <BsSuitcaseLgFill className="font-extrabold text-[20px] flex-shrink-0"></BsSuitcaseLgFill>
          </div>
          <h2>{details[0].number}</h2>
          <p>{details[0].text}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue text-white h-12 w-12 flex items-center justify-center rounded-full">
            <LuBraces className="font-extrabold text-[24px] flex-shrink-0"></LuBraces>
          </div>
          <h2>{details[1].number}</h2>
          <p>{details[1].text}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue text-white h-12 w-12 flex items-center justify-center rounded-full">
            <IoNewspaperSharp className="font-extrabold text-[20px] flex-shrink-0"></IoNewspaperSharp>
          </div>
          <h2>{details[2].number}</h2>
          <p>{details[2].text}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue text-white h-12 w-12 flex items-center justify-center rounded-full">
            <GiAchievement className="font-extrabold text-[26px] flex-shrink-0"></GiAchievement>
          </div>
          <div className="flex flex-col items-center">
            <h2>{details[3].number}</h2>
            <p>{details[3].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
