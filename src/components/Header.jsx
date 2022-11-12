import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserGlobal } from "../context/GlobalContext";
import Title from "./Title";

const Header = ({ status }) => {
  const navigate = useNavigate();
  const { handleLogout, data } = UserGlobal();
  return (
    <div className="flex items-center justify-between w-4/5 mx-auto py-3">
      <div className="text-2xl" onClick={() => navigate("/")}>
        <Title />
      </div>
      <div className="flex">
        <Link to="/">
          <p
            className={`font-semibold hover:text-primaryColor duration-200 ${
              status === "home" ? "text-primaryColor font-bold" : null
            }`}
          >
            Home
          </p>
        </Link>
        <span className="px-4 font-semibold">/</span>
        <Link to="/job-vacancy">
          <p
            className={`font-semibold hover:text-primaryColor duration-200 ${
              status === "lowongan" ? "text-primaryColor font-bold" : null
            }`}
          >
            Lowongan
          </p>
        </Link>
        {Cookies.get("token") !== undefined ? (
          <>
            <span className="px-4 font-semibold">/</span>
            <Link to="/dashboard">
              <p
                className={`font-semibold hover:text-primaryColor duration-200 ${
                  status === "dashboard" ? "text-primaryColor font-bold" : null
                }`}
              >
                Dashboard
              </p>
            </Link>
          </>
        ) : null}
      </div>
      {Cookies.get("token") === undefined ? (
        <button
          onClick={() => navigate("/login")}
          className="border-2 border-primaryColor rounded-md px-3 py-1 text-sm text-primaryColor font-semibold hover:bg-primaryColor hover:text-white duration-200"
        >
          Login
        </button>
      ) : (
        <div className="flex gap-2 items-center">
          <div>
            <p className="text-lg font-semibold">Haloo!</p>
          </div>
          {/* profile */}
          <div className="w-8 h-8 p-4 bg-primaryColor rounded-full relative "></div>
          <div
            onClick={handleLogout}
            className="border-2 border-primaryColor py-.5 px-2 rounded-lg text-primaryColor font-bold hover:bg-primaryColor hover:text-white cursor-pointer"
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
