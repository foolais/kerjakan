import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen">
      <img
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png"
        alt="notFound"
      />
      <button
        onClick={() => navigate("/")}
        className="z-20 bg-[#262626] py-2 px-6 rounded-md text-white font-bold absolute top-[70%] left-1/2 transform -translate-x-1/2 "
      >
        Home
      </button>
    </div>
  );
};

export default PageNotFound;
