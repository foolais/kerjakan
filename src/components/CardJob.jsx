import React from "react";
import { FaRegMoneyBillAlt, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { UserGlobal } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const CardJob = ({ job }) => {
  const { rupiah, truncateString } = UserGlobal();
  const navigate = useNavigate();
  return (
    <div className="w-full md:w-[45%] lg:w-[30%] flex md:block border-[1px] border-slate-400 shadow-lg p-4 rounded-md">
      <div className="w-1/2 md:w-auto mb-0 md:mb-4">
        <img
          src={job.company_image_url}
          alt="images"
          className="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] bg-cover mx-auto rounded-md"
        />
      </div>
      <div className="w-1/2 md:w-auto ml-4 md:ml-0 flex flex-col relative">
        <h2 className="text-2xl font-bold mb-4">{job.company_name}</h2>
        <div className="mb-8">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <p className="text-[#aaa] text-sm">
              {truncateString(job.company_city, 30)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaBriefcase />
            <p className="font-semibold">{job.title}</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegMoneyBillAlt className="text-green-500" />
            <p className="text-sm lg:text-base">{`${rupiah(
              job.salary_min
            )} - ${rupiah(job.salary_max)}`}</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 md:relative flex gap-2 items-center md:mx-auto">
          <div>
            {job?.job_status === 1 ? (
              <div className="bg-green-500 w-max px-2 py-1 md:px-3 md:py-2 rounded-md text-white">
                Dibuka
              </div>
            ) : job?.job_status === 0 ? (
              <div className="bg-red-500 w-max px-2 py-1 md:px-3 md:py-2 rounded-md text-white">
                Ditutup
              </div>
            ) : null}
          </div>
          <button
            onClick={() => navigate("/job-vacancy/" + job.id)}
            className="bg-primaryColor w-max px-2 py-1 md:px-3 md:py-2 rounded-md text-white font-semibold hover:bg-blue-900 cursor-pointer"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardJob;
