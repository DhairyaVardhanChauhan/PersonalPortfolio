import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const data = [
  {
    logo: <IoLocationOutline className="h-6 w-6 text-blue"></IoLocationOutline>,
    heading: "Location:",
    extraDetails: ["dhairyacn14@gmail.com", "dhairyacn2020@gmail.com"],
  },
];

const ReachOut = () => {
  return (
    <div className="flex flex-col mt-[60px]">
      {data.map((item) => { 
        return (
          <div className="flex justify-center">
            <div className="bg-[#cde3fa] flex rounded-full items-center justify-center h-12 w-12 mr-4">{item.logo}</div>
            <div>
              <h3 className="text-xl font-semibold text-[#45505b] font-popins">{item.heading}</h3>
              <p className="text-[#728394] font-popins text-sm">{item.extraDetails}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReachOut;
