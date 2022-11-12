import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Action, Footer, Header, ListJobValue, Sidebar } from "../components";
import { UserGlobal } from "../context/GlobalContext";

const ListJob = () => {
  const navigate = useNavigate();
  const { jobs, searchValue, filterStatus, filteredJob } = UserGlobal();
  return (
    <div>
      <Header status="dashboard" />
      <Sidebar active="listJob" />
      <div className="flex">
        <div className="w-1/5"></div>
        <div className="w-4/5 p-8">
          <h3 className="text-2xl font-bold text-primaryColor">
            List Job Vacancy
          </h3>
          <div
            onClick={() => navigate("/dashboard/list-job-vacancy/create")}
            className="flex items-center gap-2 my-5 bg-primaryColor w-max text-white py-2 px-5 rounded-xl cursor-pointer hover:bg-blue-900"
          >
            <p>Create Data</p>
            <FaPlus />
          </div>
          <div className="my-4">
            <Action />
          </div>
          {/* Table */}
          <div className="overflow-scroll relative shadow-lg sm:rounded-lg w-11/12 ">
            <table className="w-full text-sm text-gray-500 ">
              <thead className="text-xs uppercase bg-primaryColor text-white">
                <tr>
                  <th scope="col" className="py-3 px-3">
                    No
                  </th>
                  <th scope="col" className="py-3 px-16">
                    <p>Name</p>
                  </th>
                  <th scope="col" className="py-3 px-3">
                    City
                  </th>
                  <th scope="col" className="py-3 px-10">
                    Title
                  </th>
                  <th scope="col" className="py-3 px-8">
                    Type
                  </th>
                  <th scope="col" className="py-3 px-4">
                    Tenure
                  </th>
                  <th scope="col" className="py-3 px-3">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6">
                    Image_URL
                  </th>
                  <th scope="col" className="py-3 px-12">
                    Job_Description
                  </th>
                  <th scope="col" className="py-3 px-12">
                    Job_Qualification
                  </th>
                  <th scope="col" className="py-3 px-10">
                    Salary_Min
                  </th>
                  <th scope="col" className="py-3 px-10">
                    Salary_Max
                  </th>
                  <th scope="col" className="py-3 px-10">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterStatus && !filteredJob.length ? (
                  <div className="absolute top-0 bg-white w-full h-full text-center">
                    <p className="text-red-500 font-semibold text-xl">
                      No Result Found!!!
                    </p>
                  </div>
                ) : (
                  <>
                    {filteredJob.map((job, index) => (
                      <ListJobValue key={job.id} job={job} index={index} />
                    ))}
                  </>
                )}
                {!filterStatus && (
                  <>
                    {jobs
                      .filter((item) => {
                        return searchValue.toLowerCase() === ""
                          ? item
                          : item.company_name
                              .toLowerCase()
                              .includes(searchValue);
                      })
                      .map((job, index) => (
                        <ListJobValue key={job.id} job={job} index={index} />
                      ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
          {/* END ofTable */}
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default ListJob;
