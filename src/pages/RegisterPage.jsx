import React from "react";
import { useNavigate } from "react-router-dom";
import SideImage from "../components/SideImage";
import Title from "../components/Title";
import { UserGlobal } from "../context/GlobalContext";

const RegisterPage = () => {
  const { register, handleChangeRegister, handleRegister } = UserGlobal();
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 xl:w-1/3 h-full flex flex-col items-center py-20 bg-slate-50">
        <div className="flex flex-col w-3/4 gap-4 p-4 rounded-md">
          {/* title */}
          <div onClick={() => navigate("/")} className="mx-auto text-4xl mb-4">
            <Title />
          </div>
          {/* greeting */}
          <h1 className="text-center text-3xl font-bold ">
            Welcome to Kerjakan
          </h1>
          {/* form */}
          <form onSubmit={handleRegister}>
            <span className="span-session">Name</span>
            <input
              className="input-value mb-4"
              onChange={handleChangeRegister}
              value={register.name}
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <span className="span-sesion">Image Url</span>
            <input
              className="input-value mb-4"
              onChange={handleChangeRegister}
              value={register.image_url}
              type="text"
              name="image_url"
              placeholder="Image Url"
              required
            />
            <span className="span-sesion">Email Address</span>
            <input
              className="input-value mb-4"
              onChange={handleChangeRegister}
              value={register.email}
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <span className="span-sesion">Password</span>
            <input
              className="input-value"
              onChange={handleChangeRegister}
              value={register.password}
              type="password"
              name="password"
              placeholder="Password"
              minLength={8}
              required
            />
            <button className="button-session">Register</button>
          </form>
          {/* questions */}
          <div className="mx-auto font-semibold text-sm text-gray-500">
            Sudah punya akun?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-primaryColor font-bold cursor-pointer"
            >
              Login
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

export default RegisterPage;
