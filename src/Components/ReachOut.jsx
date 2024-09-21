import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const data = [
  {
    logo: (
      <IoLocationOutline className="h-6 w-6 transition-colors duration-300 text-blue group-hover:text-white" />
    ),
    heading: "Location:",
    extraDetails: ["Sector-50 Gurugram, Haryana, 122018"],
  },
  {
    logo: (
      <IoMailOpenOutline className="h-6 w-6 transition-colors duration-300 text-blue group-hover:text-white" />
    ),
    heading: "Email:",
    extraDetails: ["dhairyacn14@gmail.com", "dhairyacn2020@gmail.com"],
  },
  {
    logo: (
      <FaMobileAlt className="h-6 w-6 transition-colors duration-300 text-blue group-hover:text-white " />
    ),
    heading: "Mobile:",
    extraDetails: ["+91 931 198 5578"],
  },
];

const ReachOut = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col justify-center items-center mt-[60px]">
        <div className="flex flex-col">
          {data.map((item, index) => (
            <div key={index} className="group flex items-center mb-12">
              <div className="bg-[#cde3fa] flex rounded-full items-center justify-center h-12 w-12 mr-4 transition-all duration-300 group-hover:bg-[#0563bb]">
                <div className="text-blue-500 ">{item.logo}</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#45505b] font-popins pb-1">
                  {item.heading}
                </h3>
                {item.extraDetails.map((data, index) => (
                  <p
                    key={index}
                    className="text-[#728394] font-popins text-sm pb-0.5"
                  >
                    {data}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ReachOut;
