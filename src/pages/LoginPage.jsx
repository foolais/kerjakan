import React from "react";
import { useNavigate } from "react-router-dom";
import SideImage from "../components/SideImage";
import Title from "../components/Title";
import { UserGlobal } from "../context/GlobalContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, handleChangeLogin, handleLogin } = UserGlobal();
  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 xl:w-1/3 h-full flex flex-col items-center py-20 bg-slate-50">
        <div className="flex flex-col w-3/4 gap-4 p-4 rounded-md">
          {/* title */}
          <div onClick={() => navigate("/")} className="mx-auto text-4xl mb-4">
            <Title />
          </div>
          {/* greeting */}
          <h1 className="text-center text-3xl font-bold ">Welcome Back</h1>
          {/* form */}
          <form onSubmit={handleLogin}>
            <span className="span-session">Email Address</span>
            <input
              className="input-value mb-4"
              onChange={handleChangeLogin}
              type="email"
              name="email"
              value={login.email}
              placeholder="Email"
              required
            />
            <span className="span-session">Password</span>
            <input
              className="input-value"
              onChange={handleChangeLogin}
              type="password"
              name="password"
              value={login.password}
              placeholder="Password"
              required
            />
            <button className="button-session">Log In</button>
          </form>
          {/* questions */}
          <div className="mx-auto font-semibold text-sm text-gray-500">
            Belum punya akun?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-primaryColor font-bold cursor-pointer"
            >
              Register
            </span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2 xl:w-2/3">
        <SideImage />
      </div>
    </div>
  );
};

export default LoginPage;
