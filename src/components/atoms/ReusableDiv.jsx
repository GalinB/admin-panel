import React from "react";

const ReusableDiv = ({ text }) => {
  return (
    <div className="hover:bg-gray-200 hover:text-black hover:font-bold rounded-lg py-1 px-3 select-none cursor-pointer">
      {text}
    </div>
  );
};

export default ReusableDiv;
