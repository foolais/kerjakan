import React from "react";
import { Footer, Header, Sidebar } from "../components";
import { UserGlobal } from "../context/GlobalContext";

const ChangePassword = () => {
  const { handleChangePassword, handleInputChangePassword, password } =
    UserGlobal();
  return (
    <div>
      <Header status="dashboard" />
      <Sidebar active="changePassword" />
      <div className="flex">
        <div className="w-1/4 lg:w-1/5"></div>
        <div className="w-3/4 lg:w-4/5 p-8">
          <h3 className="text-2xl font-bold text-primaryColor">
            Change Password
          </h3>
          <div className="w-11/12 my-8">
            <form onSubmit={handleChangePassword}>
              <div className="flex items-center">
                <span className="span-session w-1/4">Current password</span>
                <input
                  onChange={handleInputChangePassword}
                  value={password.current_password}
                  className="input-value w-3/4"
                  type="password"
                  name="current_password"
                />
              </div>
              <div className="flex items-center my-7">
                <span className="span-session w-1/4">New password</span>
                <input
                  onChange={handleInputChangePassword}
                  value={password.new_password}
                  className="input-value w-3/4"
                  type="password"
                  name="new_password"
                />
              </div>
              <div className="flex items-center">
                <span className="span-session w-1/4">New Confirm password</span>
                <input
                  onChange={handleInputChangePassword}
                  value={password.new_confirm_password}
                  className="input-value w-3/4"
                  type="password"
                  name="new_confirm_password"
                />
              </div>
              <button className="button-session">Change</button>
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

export default ChangePassword;
