import React from "react";
import { universities, mentorsData } from "../data";
import Unicard from "../components/Unicard";
import Mentors from "../components/Mentors";
import MentorWithbutton from "../components/MentorWithbutton";
import avatar from "../assets/avatar.jpg";

const Teams = () => {
  return (
    <div className="w-5/6 mx-auto mt-10 text-center">
      {/* university section */}
      <div className="university">
        <h1 className="text-5xl text-center mb-8 background-gradient-text font-bold p-3">
          Teams Page
        </h1>
        <p className="text-2xl font-semibold font-poppins gradient-text">
          Learn from Scientists, Research scholars from the <br />
          top institute in the world
        </p>
        <div className="flex flex-wrap justify-center items-center mt-10">
          {universities.map((university, index) => (
            <Unicard uni={university} key={index} />
          ))}
          <div className="w-2/4 p-3 pl-8 h-36 flex flex-col justify-center items-center">
            <h1 className=" tracking-wide text-xl font-semibold text-[#234EB0]">
              ............. and so on
            </h1>
          </div>
        </div>
      </div>
      {/* //mentor section */}
      <div className="mentor flex justify-center items-center flex-wrap ">
        <h1 className=" mt-10 text-center text-5xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold">
          Meet Your Mentors
        </h1>

        <div className="flex flex-wrap justify-center items-center">
          {mentorsData.map((mentor, index) => (
            <div className="item md:w-1/4 w-full mb-10" key={index}>
              <Mentors mentor={mentor} />
            </div>
          ))}
        </div>
      </div>
      {/* //advisor and mentor section */}
      <div className="advisor mb-6 ">
        <h1 className="text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold p-3">
          Mentor and Advisor
        </h1>
        <div className="flex flex-wrap justify-center sm:justify-between items-center">
          <div className="flex flex-col justify-center items-center mb-2 pl-4">
            <img
              src={avatar}
              className="h-24 w-24 rounded-full mb-2"
              alt="image"
            />
            <p className="text-gray-500 font-semibold">Dr. Omkar</p>
            <p className="text-gray-500 font-semibold">
              Principal project scientist <br /> IIT madras
            </p>
          </div>
          <MentorWithbutton name={"Akhil tripathi"} />
          <MentorWithbutton name={"Vivek Dwivedi"} />
        </div>
      </div>
    </div>
  );
};

export default Teams;
