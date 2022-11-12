import React from "react";
import { Action, CardJob, Footer, Header } from "../components";
import { UserGlobal } from "../context/GlobalContext";

const JobVacancy = () => {
  const { jobs, searchValue, filteredJob, filterStatus } = UserGlobal();
  return (
    <>
      <Header status="lowongan" />
      <div className="w-4/5 mx-auto py-8">
        <Action />
      </div>

      <div className="w-4/5 mx-auto flex justify-evenly flex-wrap gap-4">
        {filterStatus && !filteredJob.length ? (
          <>
            <p className="text-red-500 font-semibold text-xl">
              No Result Found!!!
            </p>
          </>
        ) : (
          <>
            {filteredJob.map((job) => (
              <CardJob key={job.id} job={job} />
            ))}
          </>
        )}
        {!filterStatus && (
          <>
            {jobs
              .filter((item) => {
                return searchValue.toLowerCase() === ""
                  ? item
                  : item.company_name.toLowerCase().includes(searchValue);
              })
              .map((job) => (
                <CardJob key={job.id} job={job} />
              ))}
          </>
        )}
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
};

export default JobVacancy;
