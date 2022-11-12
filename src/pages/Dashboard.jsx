import React from "react";
import { Footer, Header, Sidebar } from "../components";

const Dashboard = () => {
  return (
    <div>
      <Header status="dashboard" />
      <Sidebar active="dashboard" />
      <div className="flex">
        <div className="w-1/5"></div>
        <div className="w-4/5 mx-auto p-8">
          <div className="bg-secondaryColor px-8 py-16 w-11/12 rounded-xl flex items-center relative">
            <div className="w-1/2">
              <h3 className="text-3xl font-bold">Welcome Back !!! </h3>
              <p className="text-gray-500 text-lg font-semibold">
                Have a nice day at work
              </p>
            </div>
            <div className="w-1/2 flex items-center justify-center absolute -bottom-5 right-0">
              <img
                src="https://freesvg.org/img/publicdomainq-business-man-and-woman-with-documents.png"
                alt="images"
                className="w-1/2 2xl:w-1/3 bg-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
