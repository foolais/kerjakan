import React from "react";
import BgHero from "../images/bg-hero.jpg";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Cards from "./Cards";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full">
      <div className="w-4/5 mx-auto flex items-center relative py-32">
        <div className="grid gap-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Cari Lowongan Pekerajaan Disini
          </h2>
          <div className="w-11/12">
            <p className="text-lg lg:text-2xl ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis quod laudantium fugiat reprehenderit eligendi qui illo
              eum voluptatem impedit inventore.
            </p>
          </div>
          <div
            onClick={() => navigate("/job-vacancy")}
            className="w-max mx-auto md:mx-0 flex items-center justify-center gap-2 bg-primaryColor px-5 py-2 text-white rounded-md hover:bg-opacity-90 font-semibold uppercase lg:px-6 lg:py-3 lg:text-lg"
          >
            <FaPlay />
            Explore Now
          </div>
        </div>
        <div className="hidden md:block md:w-2/3 lg:w-3/4 ">
          <img
            className="bg-cover w-[200px] h-[200px] lg:w-auto lg:h-auto"
            src={BgHero}
            alt="hero"
          />
        </div>
        <div className="bg-[#D5E5FC] w-3/4 py-4 px-8 rounded-lg absolute -bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <div className="flex items-center justify-between">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              quos?
            </p>
            <button
              onClick={() => navigate("/register")}
              className="bg-primaryColor rounded-md px-3 py-2 text-sm text-white font-semibold hover: hover:bg-opacity-90 duration-200"
            >
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-secondaryColor">
        <div className="w-4/5 mx-auto pt-20 pb-24">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold mb-4">
            Layanan kami
          </h2>
          <div className="flex flex-col flex-wrap md:flex-row gap-6 items-center justify-between">
            <Cards title="100rb+ pengguna" />
            <Cards title="Terdaftar di Kominfo" />
            <Cards title="Transparan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
