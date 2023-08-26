import React from "react";
import mentors from "../assets/mentors.png";
import Textbutton from "./Textbutton";

const Mentors = ({ name }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-2">
      <img src={mentors} className="h-24 w-24 rounded-full mb-2 " alt="image" />
      <p className="text-gray-500 font-semibold mb-2">{name}</p>
      <Textbutton />
    </div>
  );
};

export default Mentors;
