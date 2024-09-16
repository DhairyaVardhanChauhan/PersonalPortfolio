import React from "react";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { IoNewspaperSharp } from "react-icons/io5";
import { LuBraces, LuDownload } from "react-icons/lu";
import Headings from "./Headings";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const details = [
  {
    number: 1,
    text: "Internships",
    icon: (
      <BsSuitcaseLgFill className="font-extrabold lg:text-[20px] xs:text-[16px] flex-shrink-0" />
    ),
  },
  {
    number: 4,
    text: "Projects",
    icon: (
      <LuBraces className="font-extrabold lg:text-[20px] xs:text-[16px] flex-shrink-0" />
    ),
  },
  {
    number: 6,
    text: "Research Work",
    icon: (
      <IoNewspaperSharp className="font-extrabold lg:text-[20px] xs:text-[16px] flex-shrink-0" />
    ),
  },
  {
    number: 14,
    text: "Activities & Awards",
    icon: (
      <GiAchievement className="font-extrabold lg:text-[20px] xs:text-[16px] flex-shrink-0" />
    ),
  },
];

const About = () => {
  return (
    <motion.div
      className="ml-0 mr-0 xs:ml-10 xs:mr-10 lg:ml-0 lg:mr-0"
      initial={{ opacity: 0, y: 50 }} // Initially hidden and pushed down
      whileInView={{ opacity: 1, y: 0 }} // Animate when in view
      transition={{ duration: 1, ease: "easeOut" }} // Smooth entrance
      viewport={{ once: true }} // Trigger animation only once
    >
      <Headings>About</Headings>

      <div className="flex lg:flex-row min-[0px]:flex-col mt-[60px]">
        <motion.div
          className="min-[0px]:w-full lg:w-1/3 object-cover pt-8"
          initial={{ opacity: 0, scale: 0.8 }} // Initially smaller and hidden
          whileInView={{ opacity: 1, scale: 1 }} // Grow and show
          transition={{ duration: 1, ease: "easeOut" }} // Smooth animation
          viewport={{ once: true }}
        >
          <img
            src="portfolio-img1.jpeg"
            alt="Profile"
            className="object-cover rounded-lg lg:h-[27rem] w-full"
          />
        </motion.div>

        <motion.div
          className="pt-8 lg:pl-8 xs:w-full lg:w-[62%] font-popins"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
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
            <div className="flex items-center hover:scale-110 transition-transform duration-300">
              <LuDownload />
              <p className="pl-2 ">View Resume</p>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Details Section with CountUp Animation */}
      <motion.div
        className="pt-[60px] flex flex-wrap justify-between"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {details.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-grow basis-1/4 pr-6 mb-6"
          >
            <div className="bg-blue text-white lg:h-12 lg:w-12 xs:h-8 xs:w-8 flex items-center justify-center rounded-full">
              {item.icon}
            </div>
            <h2 className="xs:text-[9px] lg:text-3xl pt-2">
              <CountUp
                start={0}
                end={item.number}
                duration={2}
                delay={0.5}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </h2>
            <p className="xs:text-[9px] lg:text-xl text-center">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
