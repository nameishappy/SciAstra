import React from "react";
import avatar from "../assets/avatar.jpg";

const Mentors = ({ mentor }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-2">
      <img src={avatar} className="h-24 w-24 rounded-full mb-2" alt="image" />
      <p className="text-gray-500 font-semibold">{mentor.name}</p>
      <p className="text-gray-500 font-semibold">{mentor.college}</p>
    </div>
  );
};

export default Mentors;
