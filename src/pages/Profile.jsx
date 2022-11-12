import React from "react";
import { Footer, Header, Sidebar } from "../components";

const Profile = () => {
  return (
    <div>
      <Header status="dashboard" />
      <Sidebar active="profile" />
      <div className="flex">
        <div className="w-1/4 lg:w-1/5"></div>
        <div className="w-3/4 lg:w-4/5 p-8">
          <h3 className="text-2xl font-bold text-primaryColor">Profile</h3>
          <div className="w-11/12 flex flex-col gap-8 items-center justify-center my-8">
            <div className="w-[200px] h-[200px] bg-primaryColor rounded-full"></div>
            <div className="flex flex-col gap-4 divide-y-2 divide-primaryColor">
              <span className="text-3xl font-semibold">
                Wahyu Esya Nasution
              </span>
              <span className="text-2xl font-semibold">
                wahyu.esya17@gmail.com
              </span>
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

export default Profile;
