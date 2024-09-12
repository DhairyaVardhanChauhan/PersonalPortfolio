import React from "react";

const data = [
  {
    logo: "logo1",
    heading: "Heading1",
    extraDetails: ["dhairyacn14@gmail.com", "dhairyacn2020@gmail.com"],
  },
];

const ReachOut = () => {
  return (
    <div className="flex flex-col">
      {data.map((item) => {
        return (
          <div className="flex">
            <div className="bg-[#eef7ff] rounded-full items-center justify-center">{item.logo}</div>
            <div>
              <h1>{item.heading}</h1>
              <p>{item.extraDetails}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReachOut;
