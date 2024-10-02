import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-8 border-blue border-t-transparent border-b-transparent rounded-full animate-spin-fast"></div>
    </div>
  );
};

export default Loader;
