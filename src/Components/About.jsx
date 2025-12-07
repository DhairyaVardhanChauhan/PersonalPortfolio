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
    <motion.div>
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
            src="Me2.jpg"
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
            Hey there! I'm <strong>Dhairya Vardhan Chauhan</strong>, currently
            pursuing a<strong> Bachelor of Technology</strong> at Bennett
            University with a CGPA of
            <strong> 9.51/10</strong>. I love building and scaling backend
            systems, and I spend most of my time working with Java, Spring Boot,
            and databases to create clean, reliable, and well-optimized
            architectures. Somehow, I managed to do all this while still
            occasionally touching grass.
          </p>

          <p className="text-justify">
            I'm also deeply into problem-solving on <strong>LeetCode</strong>,
            where I’ve solved over <strong>1400+ problems</strong> and
            participated in more than
            <strong> 50 contests</strong>. I hold a top{" "}
            <strong>5% ranking</strong> with a peak rating of{" "}
            <strong>1855</strong>, and proudly wear the title of
            <strong> Knight</strong> on the platform.
          </p>

          <p className="text-justify">
            I enjoy building things from scratch — from a fully functional
            <strong> multithreaded web server</strong> in Java to a self-made
            <strong> Operational Transformation (OT) engine</strong> for
            real-time collaborative editing (think Google Docs, but
            handcrafted). I've also created tools like a{" "}
            <strong>Sorting Visualizer</strong> and a
            <strong> DSA Sheet Maker</strong>, blending backend logic with
            smooth user interaction.
          </p>

          <p className="text-justify">
            When I'm not coding, I'm usually exploring new technologies,
            breaking and fixing my own side projects, or contributing to the
            developer community. I love learning, experimenting, and constantly
            leveling up.
          </p>

          <p className="text-justify">
            Thanks for taking the time to know a bit about me. I’m excited for
            all the new challenges and opportunities this journey in software
            development has in store.
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
