import React from "react";

const Headings = ({ children }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div>
        <h2 className=" relative text-name  uppercase text-[32px] font-bold pb-3">
          {children}
        </h2>
        <div className=" relative bg-gray-300 h-[1.2px] after:content-[''] after:top-1/2 after:left-1/2 after:bg-blue after:h-[3px] after:w-10 after:absolute after:-translate-x-1/2 after:-translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default Headings;
