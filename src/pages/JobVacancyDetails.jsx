import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaAngleLeft,
  FaHourglassHalf,
  FaMapMarkerAlt,
  FaRegMoneyBillAlt,
  FaUserTie,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Footer, Header } from "../components";
import { UserGlobal } from "../context/GlobalContext";

const JobVacancyDetails = () => {
  const { rupiah } = UserGlobal();
  const { jobId } = useParams();
  const [jobDetail, setJobDetail] = useState([]);
  const navigate = useNavigate();

  // get job data with id
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy/" + jobId)
        .then((res) => setJobDetail(res.data))
        .catch((err) => console.log(err));
    };
    fetchData();
    console.log(jobDetail);
  }, [jobId, jobDetail]);

  return (
    <div>
      <Header status="lowongan" />
      <div className="w-4/5 mx-auto flex flex-col lg:grid relative">
        <div
          onClick={() => navigate("/job-vacancy")}
          className="absolute top-0 flex items-center gap-2 mt-4 text-xl text-primaryColor font-medium cursor-pointer"
        >
          <FaAngleLeft />
          <p>Kembali</p>
        </div>
        <div className="lg:flex lg:items-center lg:justify-between lg:mt-12 lg:relative">
          {/* images */}
          <div className="w-full mt-16 mb-6 lg:w-1/2 xl:w-2/6">
            <img
              src={jobDetail?.company_image_url}
              alt="job_image"
              className="bg-cover w-[350px] mx-auto"
            />
          </div>
          {/* title */}
          {/* title Company */}
          <div className="text-center text-2xl font-bold lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
            {jobDetail?.company_name}
          </div>
          <div className="w-full lg:w-1/2 xl:w-4/6 xl:pl-6 flex flex-col">
            <div className="grid gap-2 my-8 text-sm font-medium lg:text-xl">
              {/* salary */}
              <div className="flex items-center gap-2">
                <FaRegMoneyBillAlt className="text-green-500" />
                <span>{`${rupiah(jobDetail.salary_min)} - ${rupiah(
                  jobDetail.salary_max
                )}`}</span>
              </div>
              {/* city */}
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primaryColor" />
                <span>{jobDetail?.company_city}</span>
              </div>
              {/* title */}
              <div className="flex items-center gap-2">
                <FaUserTie className="text-teal-500" />
                <span>{jobDetail?.title}</span>
              </div>
              {/* type */}
              <div className="flex items-center gap-2">
                <FaHourglassHalf className="text-gray-500" />
                <span>{`${jobDetail?.job_tenure}, ${jobDetail?.job_type}`}</span>
              </div>
            </div>
            {/* Status */}
            <div>
              {" "}
              {jobDetail?.job_status === 1 ? (
                <div className="bg-green-500 w-max px-2 py-1 md:px-3 md:py-2 rounded-md text-white">
                  Dibuka
                </div>
              ) : jobDetail?.job_status === 0 ? (
                <div className="bg-red-500 w-max px-2 py-1 md:px-3 md:py-2 rounded-md text-white">
                  Ditutup
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <hr className="w-full border-2 bg-primaryColor border-primaryColor rounded-md" />
        {/* desc */}
        <div className="">
          <div className="py-6">
            <p className="font-semibold text-lg">Job Description</p>
            {jobDetail?.job_description}
          </div>
          <hr className="w-full border-2 bg-primaryColor border-primaryColor rounded-md" />
          <div className="py-6">
            <p className="font-semibold text-lg">Job Qualification</p>
            {jobDetail?.job_qualification}
          </div>
        </div>
        <hr className="w-full border-2 bg-primaryColor border-primaryColor rounded-md" />
      </div>
      <Footer />
    </div>
  );
};

export default JobVacancyDetails;
