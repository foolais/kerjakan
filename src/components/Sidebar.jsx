import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  return (
    <div className="w-1/5 shadow-2xl absolute top-0 min-h-full z-20">
      <div className="py-4">
        <div
          onClick={() => navigate("/")}
          className="text-4xl text-center bg-white w-full mx-auto px-3 py-1 rounded-md"
        >
          <Title />
        </div>
        {/* container */}
        <div className="text-xl my-20 pr-6">
          <div
            onClick={() => navigate("/dashboard")}
            className={`dash ${active === "dashboard" ? "dash-active" : null}`}
          >
            Dashboard
          </div>
          <div
            onClick={() => navigate("/dashboard/list-job-vacancy")}
            className={`dash my-4 ${
              active === "listJob" ? "dash-active" : null
            }`}
          >
            List Job
          </div>
          <div
            onClick={() => navigate("/dashboard/list-job-vacancy/create")}
            className={`dash ${active === "dataForm" ? "dash-active" : null}`}
          >
            Data Form
          </div>
          <div
            onClick={() => navigate("/dashboard/profile")}
            className={`dash my-4 ${
              active === "profile" ? "dash-active" : null
            }`}
          >
            Profile
          </div>
          <div
            onClick={() => navigate("/dashboard/change-password")}
            className={`dash ${
              active === "changePassword" ? "dash-active" : null
            }`}
          >
            Change Password
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
