import React from "react";
import { Footer, Header, Sidebar } from "../components";
import { UserGlobal } from "../context/GlobalContext";

const DataFormId = () => {
  const { handleNewJob, handleNewJobInput, newJob } = UserGlobal();
  return (
    <div className="relative">
      <Header status="dashboard" />
      <Sidebar active="dataForm" />
      <div className="flex pb-8">
        <div className="w-1/5"></div>
        <div className="w-4/5 p-8">
          <h3 className="text-2xl font-bold text-primaryColor">
            Edit Data Form
          </h3>
          <p className="mt-2 mb-6 font-semibold text-gray-500">
            - Edit Data Job Vacancy
          </p>
          <div>
            <form onSubmit={handleNewJob}>
              {/* Company name */}
              <div className="flex items-center gap-2">
                <span className="span-session w-1/4">Company Name</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.company_name}
                  className="input-value w-3/4"
                  type="text"
                  name="company_name"
                  placeholder="Company Name (ex: Google)"
                  required
                />
              </div>
              {/* title */}
              <div className="flex items-center gap-2 my-4">
                <span className="span-session w-1/4">Title</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.title}
                  className="input-value w-3/4"
                  type="text"
                  name="title"
                  placeholder="Title (ex: Frontend Dev)"
                  required
                />
              </div>
              {/* company Image url */}
              <div className="flex items-center gap-2 my-4">
                <span className="span-session w-1/4">Company Image URL</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.company_image_url}
                  className="input-value w-3/4"
                  type="text"
                  name="company_image_url"
                  placeholder="Image URL..."
                  required
                />
              </div>
              {/* company city */}
              <div className="flex items-center gap-2 my-4">
                <span className="span-session w-1/4">Company City</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.company_city}
                  className="input-value w-3/4"
                  type="text"
                  name="company_city"
                  placeholder="Company City..."
                  required
                />
              </div>
              {/* job_type */}
              <div className="flex items-center gap-2 my-4">
                <span className="span-session w-1/4">Job Type</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.job_type}
                  className="input-value w-3/4"
                  type="text"
                  name="job_type"
                  placeholder="Job Type (ex: Onsite/WFH/Hybrid)"
                  required
                />
              </div>
              {/* job_tenure */}
              <div className="flex items-center gap-2 my-4">
                <span className="span-session w-1/4">Job Tenure</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.job_tenure}
                  className="input-value w-3/4"
                  type="text"
                  name="job_tenure"
                  placeholder="Job Tenure (ex: Kontrak/Magang)"
                  required
                />
              </div>
              {/* job_status */}
              <div className="flex items-center gap-2 my-4">
                <span className="span-session w-1/4">Job Status</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.job_status}
                  className="input-value w-3/4"
                  type="number"
                  name="job_status"
                  min="0"
                  max="1"
                  placeholder="Job Status (ex: 0 or 1)"
                  required
                />
              </div>
              {/* job_description */}
              <div className="flex items-center gap-2 my-4">
                <span className="span-session w-1/4">Job Description</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.job_description}
                  className="input-value w-3/4"
                  type="text"
                  name="job_description"
                  placeholder="Job Description..."
                  required
                />
              </div>
              {/* job_qualification */}
              <div className="flex items-center gap-2 my-4">
                <span className="span-session w-1/4">Job Qualification</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.job_qualification}
                  className="input-value w-3/4"
                  type="text"
                  name="job_qualification"
                  placeholder="Job Qualification..."
                  required
                />
              </div>
              {/* salary_min */}
              <div className="flex items-center gap-2 my-4">
                <span className="span-session w-1/4">Salary Minimal</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.salary_min}
                  className="input-value w-3/4"
                  type="number"
                  min="0"
                  name="salary_min"
                  placeholder="Salary Min (ex: 9000000)"
                  required
                />
              </div>
              {/* salary_max */}
              <div className="flex items-center gap-2 my-4">
                <span className="span-session w-1/4">Salary Maximal</span>
                <input
                  onChange={handleNewJobInput}
                  value={newJob.salary_max}
                  className="input-value w-3/4"
                  type="number"
                  min="0"
                  name="salary_max"
                  placeholder="Salary Max (ex: 10000000)"
                  required
                />
              </div>
              {/* submit */}
              <button className="button-session text-xl font-bold">Edit</button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default DataFormId;
