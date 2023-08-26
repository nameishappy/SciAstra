import React from "react";

const Unicard = ({ uni }) => {
  return (
    <div className="p-6 h-36 shadow-xl md:w-1/4 w-full flex justify-center items-center">
      <h3 className="text-xl font-semibold text-[#234EB0] flex justify-center items-center">
        {uni}
      </h3>
    </div>
  );
};

export default Unicard;
