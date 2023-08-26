import React from "react";

const Textbutton = () => {
  return (
    <div className=" flex justify-center items-center px-1 rounded-full h-8 w-42 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="h-7 w-40 rounded-full bg-white border-gradient">
        <button>
          <p className="text-xs font-semibold text-center gradient-text">
            Message him Now{" "}
            <span>
              <i className="fa-solid fa-paper-plane"></i>
            </span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Textbutton;
